---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: 'Transforming Ideas into High Impact Collaborations '
    subtitle: >-
      "We curate high-impact experiences for schools, corporates, brands &
      premium venues -- sparking engagement & results without the hassle."
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        flexDirection: row-reverse
        textAlign: left
    type: HeroSection
    actions: []
  - type: FeaturedPostsSection
    title: 'Must Read '
    actions:
      - type: Link
        label: See all posts
        altText: See all posts
        url: /blog
        showIcon: false
        icon: arrowRight
        iconPosition: right
        elementId: ''
    posts:
      - content/pages/blog/post-four.md
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-six.md
      - content/pages/blog/post-seven.md
    colors: colors-f
    variant: variant-b
    elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showFeaturedImage: false
    showReadMoreLink: true
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-three.md
      - content/pages/projects/project-two.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
    subtitle: Projects
  - type: TextSection
    title: About Us
    text: >
      **Rekonstrukt Global Services** was founded with a clear vision: to
      redesign how experiences, education, and engagement are delivered for the
      next generation. We operate at the intersection of events, youth culture,
      education, and brand collaboration—building platforms that create
      meaningful impact while remaining commercially scalable.


      *Reconstructing ideas. Reimagining experiences. Building the future.*
    colors: colors-f
    variant: variant-a
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        textAlign: left
  - type: CtaSection
    title: Build the Future of Experiences With Us
    text: >+
      Partner with Rekonstrukt to bring world-class events, creative programs,
      and meaningful engagement to your institution or brand.





    actions: []
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        flexDirection: col
        textAlign: left
---
