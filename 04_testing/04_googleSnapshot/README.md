# Snapshot based testing with visual regression

## Installation

1. Run `npm install` to install dependencies.
2. Run `npm run test` to simulate user interaction and create images from the page.
3. Check the created images in the `images/test` folder.
4. Run `npm run approve-test` if the images are correct. This makes reference images from them for later testing.

## Usage

1. Run `npm run test` to simulate user interaction and create images from the page.
2. Run `npm run validate-test` to compare the images with the reference ones.
3. If there were mismatches, check the `images/diff` folder for highlighted image differences.
4. Run `npm run approve-test` to approve the changes. This saves the new images as reference for later tests.
