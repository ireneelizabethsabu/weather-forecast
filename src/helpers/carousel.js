export const dailyresponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 764 },
      items: 6,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 764, min: 576 },
      items: 4,
      slidesToSlide: 3
    },
    smallScreen: {
      breakpoint: { max: 576, min: 400 },
      items: 3,
      slidesToSlide: 3
    },
    superSmallScreen: {
      breakpoint: { max: 400, min: 0 },
      items: 2,
      slidesToSlide: 2
    }
  };

export const hrresponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 2000 },
    items: 14,
    slidesToSlide: 8,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 2000, min: 1124 },
    items: 8,
    slidesToSlide: 5,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1124, min: 900 },
    items: 6,
    slidesToSlide: 4,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 956, min: 700 },
    items: 5,
    slidesToSlide: 3,
    partialVisibilityGutter: 40
  },
  smallScreen: {
    breakpoint: { max: 700, min: 0 },
    items: 4,
    slidesToSlide: 2,
    partialVisibilityGutter: 40
  }
}