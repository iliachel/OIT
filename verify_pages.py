import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    # Создаем директорию для скриншотов, если она не существует
    output_dir = "/home/jules/verification"
    os.makedirs(output_dir, exist_ok=True)

    # Список страниц для проверки
    pages_to_check = [
        "intro.html",
        "limits.html",
        "lifecycle.html",
        "frameworks.html"
    ]

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        for page_name in pages_to_check:
            # Формируем полный путь к файлу
            file_path = f"file:///app/sections/{page_name}"

            try:
                # Переходим на страницу
                await page.goto(file_path, wait_until="domcontentloaded")

                # Ждем, пока все загрузится
                await page.wait_for_load_state("networkidle")

                # Находим все изображения и ждем, пока каждое станет видимым
                images = page.locator("img")
                count = await images.count()
                if count > 0:
                    for i in range(count):
                        await images.nth(i).wait_for(state="visible")

                # Динамически получаем заголовок страницы
                title = await page.title()
                sanitized_title = "".join(x for x in title if x.isalnum())

                # Делаем скриншот
                screenshot_path = os.path.join(output_dir, f"{sanitized_title}.png")
                await page.screenshot(path=screenshot_path)
                print(f"Скриншот сохранен: {screenshot_path}")

            except Exception as e:
                print(f"Ошибка при обработке {page_name}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
