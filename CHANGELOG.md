# Changelog

## [2025-12-15.01] - 2025-12-15

### Fixed
- Fixed intermittent redirect failures when clicking WME links in Google Sheets
- Fixed issue where previously redirected links would stop working after a while
- Fixed infinite redirect loop when script ran on WME pages themselves

### Added
- Click event interceptor using capture phase to ensure redirects work even with Google's dynamic DOM
- MutationObserver for better detection of dynamically added links
- Early exit check to prevent script from running on WME pages
- Data attribute (data-beta-processed) to prevent reprocessing the same links

### Changed
- Refactored link conversion into reusable convertToBetaLink() function
- Improved error handling for URL parsing
- Enhanced support for Ctrl+Click and middle-click to open in new tabs

## [2025-12-14.02] - 2025-12-14

### Initial Release
- Basic WME link redirection to beta.waze.com
- Support for Google Sheets and Gmail
- Automatic zoom level adjustment to 18

