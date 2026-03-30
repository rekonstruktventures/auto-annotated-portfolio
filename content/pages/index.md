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
      “We design systems and strategic pathways that position brands and institutions and international operators ahead of where culture is going. In today’s market attention is not marketing it is infrastructure and we build it accordingly. We are brought in when the cost of getting it wrong is no longer acceptable. Most operators are solving for visibility. We build for control.”

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
      Rekonstrukt is a cultural infrastructure and talent acceleration firm based in New Delhi. 


      We were built inside the environments most agencies observe from the outside including live venues and artist networks and brand systems and institutional frameworks and international markets. 


      We have seen what scales and what fails and what continues to be misdiagnosed across industries and that insight drives everything we build. 


      We operate at the intersection of culture and commerce and execution. 


      Our work includes cultural and brand strategy and live experience and programming systems and talent infrastructure and pipeline development and cross border access and market integration. 


      We are not a service provider and we identify structural gaps and build systems that solve for them with long term commercial impact. 


      Rekonstrukt is led by operators with over 14 years of ground level experience across live venues and artist ecosystems and brand strategy and international market exposure.


      This is not theoretical exposure. It is built from environments where outcomes are immediate and failure is visible.
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
      Work with Rekonstrukt to design and build high impact cultural systems and strategic pathways that create long term attention and positioning and commercial advantage.


      This is not execution support. It is structural alignment for operators who intend to lead not follow.


      Strategic partnerships and market entry and cultural systems design.


      Most engagements do not move forward and the right ones do quickly.

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
