# Cloudflare Pages Setup Guide

## 1. Push to GitHub
First, use the `deploy.bat` script I created to push your code to a new GitHub repository.

## 2. Connect Cloudflare (Avoid the "Worker" Mistake)
1.  Log in to the **Cloudflare Dashboard**.
2.  Go to **Workers & Pages**.
3.  Click **Create Application**.
4.  👉 **CLICK THE "PAGES" TAB** (Do not use the "Workers" tab).
5.  Click **Connect to Git**.
6.  Choose your repository (`lolypop`) and **Begin setup**.

## 4. 🚨 CRITICAL SETTING (Fix the Error)
If you see an error about `Entry Point` or `Workers`:

1.  Run **`deploy.bat`** on your computer (I just fixed the code for you).
2.  Go to your project page in **Cloudflare**.
3.  Click the **Settings** tab (top of the page, next to "Deployments").
4.  On the left sidebar, click **Builds & deployments**.
5.  Scroll down to **Build configurations** and click **Edit**.
6.  **CHANGE "Build output directory"** to: `out`
    *(Delete whatever is there and type `out`)*.
7.  Click **Save**.
8.  Go back to **Deployments** tab and **Retry deployment**.

## 5. Automatic Updates
From now on, whenever you run `deploy.bat` and say "Yes", Cloudflare will detect the change and update your live site automatically within seconds!
