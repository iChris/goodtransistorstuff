# goodtransistorstuff
Testing out a Static Site Generator + Transistor API based podcast network site.

## Basics

I've got a [podcast network](https://goodstuff.network/) that's currently hanging on with [Jekyll](https://jekyllrb.com/) as the CMS + [Transistor](https://transistor.fm/?via=chris) as the podcast host for the MP3 files, and it all gets built out on to [Netlify](https://www.netlify.com). We currently duplicate our process of creating episodes in Jekyll and also in Transistor.

Transistor recently [opened up their API](https://developers.transistor.fm/?via=chris) which got me thinking we should be able to just enter the data in Transistor and then pull that into something like Eleventy or Nextjs automagically.

## Details

Current site: https://goodstuff.network/
Repo for current site: https://github.com/GoodStuff-Fm/goodstuff

Shows lists current and archived podcasts: https://goodstuff.network/shows/

Shows have a show page: https://goodstuff.network/25c/

Each show has episode pages for each episode in the show: https://goodstuff.network/25c/22

Other pages exist but aren't utilized a lot: https://goodstuff.network/about/

Redirects exist i.e. https://goodstuff.network/twitch

### Ideas from Discord Chats

Cassidy:
> I don't have as much experience with Eleventy, but in Next.js you can call the API and pull the episodes in the function getStaticProps and it can populate the whole site, and you can either trigger a new build whenever an episode comes up, or you can set up a web hook that listens for the feed. I can pretty much guarantee there's something similar in 11ty.

Ben:
> In Eleventy, you’d want to make any API calls you need in a global data file (https://www.11ty.dev/docs/data-global/), then use the data in your templates directly or use Eleventy’s pagination feature to create pages from that data. I’m happy to help with that where I can.

Ximena:
> ...to test it out I would probs just do another test repo with like and 11ty template and just test if those particular features you want work. A separate repo as a proof of concept, and then if it works you can branch it and do the whole thing right.

Andrew:
> you would do it with a javascript data file (https://www.11ty.dev/docs/data-js/) where you would do something like. At about the 2:45 mark this guy does it here https://www.youtube.com/watch?v=ktEjaABp4aw. he just does it with axios instead of fetch. oh right, because it's node... you would need node-fetch or axios.

```
module.exports = async function() {
  // do the "curl" here
  const shows = await fetch("https://api.transistor.fm/v1/shows", { 
    headers: {
      "x-api-key": "YOUR_API_KEY"
    }
  }).then(response => response.json());

  return shows;
};
```
Justin:
> You should check out [Adam Wathan's implementation here](https://github.com/adamwathan/fullstackradio.com/blob/master/pages/index.js#L7-L24). (He didn't use the API, just RSS feed)

# Neat Starter

Starter Template for **N**etlify CMS, **E**leventy, **A**lphine JS & **T**ailwind CSS

## Live Demo

[https://neat-starter.netlify.app/](https://neat-starter.netlify.app/)

### Technologies used:

- [Netlify CMS](https://www.netlifycms.org/)
- [Eleventy](https://www.11ty.dev/)
- [Alpine.js](https://github.com/alpinejs/alpine)
- [Tailwind CSS](https://tailwindcss.com/)

| ![image](https://user-images.githubusercontent.com/1884712/93762662-a62e4700-fc2d-11ea-9b2c-fda9f503402b.png) |
| ------------------------------------------------------------------------------------------------------------- |


<a href="https://app.netlify.com/start/deploy?repository=https://github.com/surjithctly/neat-starter&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

## Getting Started

Detailed instructions are available in my blog. [Check it out](https://blog.surjithctly.in/neat-stack-create-a-static-website-with-netlify-cms-eleventy-alpinejs-and-tailwindcss)

### 1\. Clone this Repository

```
git clone https://github.com/iChris/goodtransistorstuff
```

### 2\. Navigate to the directory

```
cd neat-starter
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run start
```

## Author

Surjith S M ( [@surjithctly](https://surjithctly.in/) )
