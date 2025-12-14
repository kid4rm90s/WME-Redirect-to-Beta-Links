# WME Redirect to Beta Links

A Tampermonkey/Greasemonkey userscript that automatically redirects all Waze Map Editor links to the Beta WME environment.

## Features

- Automatically converts all WME links from `www.waze.com` to `beta.waze.com`
- Standardizes zoom level to 18 for all links
- Works on any webpage, with optimized performance for:
  - Google Sheets
  - Gmail
- Real-time link modification as pages load

## Installation

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Safari, Edge)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)

2. Click here to install: [WME Redirect to Beta Links](https://raw.githubusercontent.com/kid4rm90s/WME-Redirect-to-Beta-Links/main/WME-Redirect-to-Beta-Links.user.js)

3. Confirm the installation when prompted by your userscript manager

## Usage

Once installed, the script runs automatically. Any Waze Map Editor link you encounter will be converted to open in Beta WME.

**Example:**
- Original: `https://www.waze.com/en-US/editor?env=row&zoomLevel=18&lat=27.511192&lon=76.576626`
- Converted: `https://beta.waze.com/en-US/editor?env=row&zoomLevel=18&lat=27.511192&lon=76.576626`

## How It Works

The script:
1. Scans all links on the page for WME editor URLs
2. Replaces `www.waze.com` with `beta.waze.com`
3. Standardizes zoom parameters to `zoomLevel=18`
4. Continuously monitors Gmail and Google Sheets for dynamically loaded links

## Credits

Modified from [WME Beta UR Links](https://greasyfork.org/scripts/524318) by FXZFun

## License

MIT License - see [LICENSE](LICENSE) for details

## Author

kid4rm90s

## Support

For issues or feature requests, please visit the [GitHub repository](https://github.com/kid4rm90s/WME-Redirect-to-Beta-Links/issues).
