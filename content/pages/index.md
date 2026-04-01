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
  lazyLoad: true # important for mobile performance

sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: We position you ahead of culture.
    subtitle: >-
      Most organizations are reacting to what’s already working. We build systems that place you where attention is going next and keep you there. We are brought in when the cost of getting it wrong is no longer acceptable. Attention isn’t marketing ... It’s infrastructure.

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
          - pt-48 # desktop-friendly top padding
          - pb-64 # desktop-friendly bottom padding
          - pl-4
          - pr-4
          # slightly smaller top/bottom padding for mobile
        flexDirection: column-reverse
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
          - pt-16
          - pb-24
          - pl-4
          - pr-4
          # reduces vertical padding for mobile
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
          - pt-16
          - pb-24
          - pl-4
          - pr-4
        textAlign: left

  - type: TextSection
    title: About Us
    text: >
      We operate inside environments most agencies only observe — live venues, artist networks, brand systems, institutions and international markets.


      We identify structural gaps and build systems that:

      - Scale across industries

      - Deliver measurable commercial impact

      - Generate long-term attention and positioning

      - Our work compounds. It doesn’t expire after a campaign cycle.

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
    title: 'Partner With the Systems That Define the Market '
    text: >

      - Work with Rekonstrukt Global Services to design and build cultural systems that create long-term attention, positioning and commercial advantage.


       - This is not execution support. It is structural alignment for operators who intend to lead, not follow.


       - Most engagements do not move forward. The right ones do quickly.
       We engage selectively. Only partnerships aligned with our vision move forward.


       Access is selective. Alignment is everything.

    actions:
      - type: link
        label: ' Engage With Us → '
        altText: 'Open engagement form'
        url: 'https://tally.so/r/A7DBxo'
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
          - pt-20
          - pb-28
          - pl-4
          - pr-4
        flexDirection: col
        textAlign: left
---
