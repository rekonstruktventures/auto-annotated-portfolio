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
    title: 'Cultural infrastructure behind markets that move'
    subtitle: >-
      We design systems and strategic pathways that position brands, institutions, and international operators ahead of where culture is going. We are brought in when the cost of getting it wrong is no longer acceptable. Attention is not marketing. It is infrastructure.

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
          - pt-24
          - pb-32
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
    title: Projects That Define the Market
    subtitle: Real systems. Real impact. Every project builds long-term positioning.
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
      We operate at the frontlines where most agencies only observe — live venues, artist networks, brand systems, institutional frameworks and international markets. We identify structural gaps and build systems that scale, deliver measurable commercial impact and generate long-term positioning. Our work compounds over time. It doesn't expire after a campaign cycle.

        **[Explore Full Overview →](/about)**

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
    text: >

      Work with Rekonstrukt to design and build high impact cultural systems and strategic pathways that create long term attention and positioning and commercial advantage.


       This is not execution support. It is structural alignment for operators who intend to lead not follow.


       Strategic partnerships and market entry and cultural systems design.


       Most engagements do not move forward. The right ones do quickly.


       If there is alignment, the first conversation happens immediately.


       Access is selective. Alignment is everything.

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
