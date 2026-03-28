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
    title: 'Engineered for the top 1% of audiences.'
    subtitle: >-
      “We create experiences that define culture, engagement, and attention — engineered for the few who lead the market.”
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
    title: 'What the Market Is Getting Wrong'
    actions:
      - type: Link
        label: See all posts
        altText: See all posts
        url: /blog
        showIcon: false
        icon: arrowRight
        iconPosition: right
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-six.md
      - content/pages/blog/post-seven.md
    colors: colors-f
    variant: variant-d
    showDate: true
    showAuthor: false
    showExcerpt: false
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

  - type: TextSection
    title: About Us
    text: >
      Rekonstrukt Global Services operates at the intersection of culture, education and brand engagement.

      We design high-impact experiences that deliver measurable engagement, long-term value and cultural relevance. 


      Where conventional approaches fail, we create scalable, outcome-driven platforms that maximize attention, loyalty and impact. Every experience we build performs — it does not just exist. 


      Our partners gain access to exclusive frameworks and activations, engineered for the few who define the market.


      Built for impact. Designed for attention. Measured by results.
    colors: colors-f
    variant: variant-a
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
    title: 'Partner With the Experiences That Define the Market '
    text: >+
      Work with Rekonstrukt to design and execute world-class activations, creative programs, and high-impact engagement — engineered for the few who set the standard and built for lasting advantage.

    actions:
      - type: link
        label: ' Engage With Us → '
        altText: 'Email partnerships@rekonstrukt.xyz'
        url: 'mailto:partnerships@rekonstrukt.xyz'
        showIcon: false
        icon: arrowRight
        iconPosition: right
        style: secondary

    colors: colors-f
    backgroundSize: full

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
