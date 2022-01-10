# Copy Facebook Link with JavaScript

## Overview
This project simply gets the copy link of Facebook post. In Facebook, not all posts are provided with "Copy Link" option and it's kinda frustrating when we want to share post to our friends in other platform. This program will be embedded in my website soon.

## Getting Started

### Prerequisites
* NodeJs Runtime Environment

To run and test the program locally, you need NodeJs installed in your computer.

### Installation
1. Clone the repo

```
git clone https://github.com/ktiarad/js-copy-fblink.git
```

## Usage
1. Open Facebook and pick a content to experiment with. Click "Share" and if the option "Copy Link" is not available, then that post is good to go.

2. Click the three dots at the top right corner of the post, then click "Embed". Click "Copy Code".

3. Go to `main.js`. Add the link at the end of the code and call the function to test it. Put the link inside single quotation marks.

```
link = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Ftiara.dewangga.1%2Fposts%2F4670600126369197&show_text=true&width=500" width="500" height="546" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';
console.log(getLink(link));
```

4. Save and run on terminal

```
node main.js
```

## Contributing
Feel free to contribute to this repo. You can contribute to recommend clean code, improve the algorithm, fix typos, or anything.

## License
The source code for the site is licensed under the `MIT license`.

## Contact
Feel free to ask or discuss about the repo with me.
Tiara Dewangga - [@ktiarad](https://twitter.com/ktiarad) - [email](https://tiaradewangga.com/#contact)
