#Portfolio Website
A open source repo of portfolio website, where user can customise the website just by updating their data in JSON file.

## JSON Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>appName</td>
      <td>Name of the application</td>
      <td>Yes</td>
      <td>Any String</td>
      <td>"Raj's Portfolio"</td>
    </tr>
    <tr>
      <td>options.darkMode</td>
      <td>Enable Toggler for dark mode: default mode will be as per users device setting</td>
      <td>No</td>
      <td>true / false [Default: true]</td>
      <td>true</td>
    </tr>
    <tr>
      <td>options.theme</td>
      <td>Theme of the application : use "custom" for your custom theme or use preset themes</td>
      <td>No</td>
      <td>"custom", "default", "blueberry", "coconut", "dragonfruit", "grape", "kiwi", "mango", "pear", "pineapple", "plum", "tangerine", "rambutan"</td>
      <td>"coconut"</td>
    </tr>
    <tr>
      <td>theme</td>
      <td>Custom Theme</td>
      <td>No</td>
      <td>JSON Object with structure as in example. <br/>Font value: Any Google Font</td>
      <td>

```json
{
  "default": {
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#707070",
    "primaryBackgroundColor": "#ffffff",
    "secondaryBackgroundColor": "#fafafa",
    "accentColor": "#ff6347",
    "accentSecondaryColor": "#ffa07a",
    "brandColor": "#ffffff",
    "fontFamily": "Roboto"
  },
  "dark": {
    "primaryTextColor": "#ffffff",
    "secondaryTextColor": "#a0a0a0",
    "primaryBackgroundColor": "#000000",
    "secondaryBackgroundColor": "#202020",
    "accentColor": "#505050",
    "accentSecondaryColor": "#050505",
    "brandColor": "#ffffff",
    "fontFamily": "Roboto"
  }
}
```

  </td>
    </tr>
    <tr>
      <td>brand.name</td>
      <td>Brand Name: will be render at Header of Page</td>
      <td>No | but recommended set atlease one of name or image</td>
      <td>Any String</td>
      <td>"Raj"</td>
    </tr>
    <tr>
      <td>brand.image</td>
      <td>Brand Logo: will be render at Header of Page</td>
      <td>No | but recommended set atlease one of name or image</td>
      <td>Path of image: Can be absolute or relative(Just upload image in public folder of repo)</td>
      <td>"/images/raj.png"</td>
    </tr>
    <tr>
      <td>meta</td>
      <td>meta data for your app</td>
      <td>No</td>
      <td>JSON Object</td>
      <td>

[See Meta Structure Table](#Meta-Structure)</td>

  </tr>
    <tr>
      <td>sections</td>
      <td>Array of sections in the application</td>
      <td>No</td>
      <td>Array of Objects</td>
      <td>

[See Section Structure Table](#Sections-Structure)</td>

  </tr>
    <tr>
      <td>footer</td>
      <td>Footer section of the application</td>
      <td>No</td>
      <td>JSON Object</td>
      <td>

[See Footer Structure Table](#Footer-Structure)</td>

  </tr>

  </tbody>
</table>

### Meta-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>Title to be seen on Browser's tab</td>
      <td>No (but recommended)</td>
      <td>Any String</td>
      <td>Raj's Portfolio</td>
    </tr>
    <tr>
      <td>description</td>
      <td>Description of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Any String</td>
      <td>Portfolio of Full Stack Developer - Raj</td>
    </tr>
    <tr>
      <td>creator</td>
      <td>creator of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Any String (Your Name)</td>
      <td>Raj</td>
    </tr>
    <tr>
      <td>keywords</td>
      <td>keywords of website to improve SEO (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>Array of String</td>
      <td>["Raj", "Developer", "Software Developer", "Full Stack Developer"]</td>
    </tr>
    <tr>
      <td>icons</td>
      <td>Icons of website (will be added in head for fevicon for different devices)</td>
      <td>No (but recommended)</td>
      <td>JSON Object</td>
      <td>

```json
{
  "icon": "https://placehold.co/60x60/ff6347/white/png?text=R",
  "shortcut": "/shortcut-icon.png",
  "apple": "/apple-icon.png",
  "other": {
    "rel": "apple-touch-icon-precomposed",
    "url": "/apple-touch-icon-precomposed.png"
  }
}
```

  </td>
    </tr>
    <tr>
      <td>robots</td>
      <td>Robots setting of website (will be added in meta tags)</td>
      <td>No (but recommended)</td>
      <td>JSON Object</td>
      <td>

```json
{
  "index": false,
  "follow": true,
  "nocache": true,
  "googleBot": {
    "index": true,
    "follow": false,
    "noimageindex": true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1
  }
}
```

  </td>
    </tr>

  </tbody>
</table>

### Sections-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>Name of the section</td>
      <td>Yes</td>
      <td>String</td>
      <td>home</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Type of the section. "home" is special section type with background image</td>
      <td>Yes</td>
      <td>home / default</td>
      <td>about-us</td>
    </tr>

[comment]: <> (Need to add all the options in section)

  </tbody>
</table>

### Footer-Structure

<table>
  <thead>
    <tr>
      <th>Field</th>
      <th>Description</th>
      <th>Required</th>
      <th>Possible values</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>heading</td>
      <td>Heading of the footer</td>
      <td>Yes</td>
      <td>String</td>
      <td>Raj</td>
    </tr>
    <tr>
      <td>content</td>
      <td>Content of the footer</td>
      <td>Yes</td>
      <td>String (HTML)</td>
      <td>
        &lt;p&gt;Let's collaborate and bring your ideas to life!&lt;/p&gt;
      </td>
    </tr>
    <tr>
      <td>socials</td>
      <td>Your socials links</td>
      <td>No</td>
      <td>Array of Objects (icon should be the classes given by fontawesome)</td>
      <td>

```json
[
  {
    "name": "Linkedin",
    "icon": "fa-brands fa-linkedin-in",
    "link": "https://www.linkedin.com/in/raj-example"
  },
  {
    "name": "Github",
    "icon": "fa-brands fa-github",
    "link": "https://github.com/raj-example"
  },
  {
    "name": "Mail ID",
    "icon": "fa-solid fa-envelope",
    "link": "mailto:raj@example.com"
  }
]
```

  </td>
    </tr>
  </tbody>
</table>

## JSON Example

```json
{
  "appName": "Raj's Portfolio",
  "options": {
    "darkMode": true,
    "theme": "custom"
  },
  "theme": {
    "default": {
      "primaryTextColor": "#ffffff",
      "secondaryTextColor": "#707070",
      "primaryBackgroundColor": "#ffffff",
      "secondaryBackgroundColor": "#fafafa",
      "accentColor": "#ff6347",
      "accentSecondaryColor": "#ffa07a",
      "brandColor": "#ffffff",
      "fontFamily": "Roboto"
    },
    "dark": {
      "primaryTextColor": "#ffffff",
      "secondaryTextColor": "#a0a0a0",
      "primaryBackgroundColor": "#000000",
      "secondaryBackgroundColor": "#202020",
      "accentColor": "#505050",
      "accentSecondaryColor": "#050505",
      "brandColor": "#ffffff",
      "fontFamily": "Roboto"
    }
  },
  "meta": {
    "title": "Raj's Portfolio",
    "description": "Portfolio of Full Stack Developer - Raj",
    "creator": "Raj",
    "keywords": [
      "Raj",
      "Developer",
      "Software Developer",
      "Full Stack Developer"
    ],
    "icons": {
      "icon": "https://placehold.co/60x60/ff6347/white/png?text=R"
    },
    "robots": {
      "index": true,
      "follow": true
    }
  },
  "brand": {
    "name": "Raj"
  },
  "sections": [
    {
      "name": "home",
      "type": "home",
      "columns": 1,
      "heading": "Hey, I'm <span class='accent-text'>Raj</span>",
      "description": "I develop innovative software solutions and thrive on turning ideas into reality.",
      "buttons": [
        {
          "text": "Projects",
          "link": "#projects"
        },
        {
          "text": "Contact Me",
          "link": "mailto:raj@example.com"
        }
      ]
    },
    {
      "name": "about-me",
      "type": "default",
      "columns": 2,
      "heading": "About Me",
      "description": "Get to know me better and explore my skills and experience.",
      "subsections": [
        {
          "name": "about-me",
          "type": "paragraph",
          "heading": "More about me...",
          "content": "<p>I'm a passionate Full Stack Developer with a focus on creating scalable and efficient web applications. I enjoy working with cutting-edge technologies to solve complex problems and deliver exceptional user experiences.</p><br><p>Currently, I'm seeking exciting opportunities to contribute my skills and expertise to innovative projects. Let's connect and build something amazing together!</p>"
        },
        {
          "name": "skills",
          "type": "badges",
          "heading": "Skills",
          "badges": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "Python",
            "Django",
            "RESTful APIs",
            "Git",
            "Responsive Design",
            "Problem Solving"
          ]
        }
      ]
    },
    {
      "name": "projects",
      "type": "default",
      "columns": 1,
      "heading": "Projects",
      "description": "Explore some of my recent projects.",
      "subsections": [
        {
          "name": "project1",
          "type": "media-item",
          "heading": "EcoMarket",
          "mediaDetails": {
            "type": "video",
            "src": "videos/placeholder.webm"
          },
          "description": "An e-commerce platform for sustainable products. Users can browse, purchase, and review eco-friendly items.",
          "badges": [
            "React",
            "Node.js",
            "MongoDB",
            "Express.js",
            "RESTful API"
          ],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.ecomarket.example"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "name": "project2",
          "type": "media-item",
          "heading": "Healthify",
          "mediaDetails": {
            "type": "image-slide",
            "src": [
              "images/healthify_1.svg",
              "images/healthify_2.svg",
              "images/healthify_3.svg"
            ]
          },
          "description": "A health and fitness tracking application. Users can set goals, track progress, and receive personalized recommendations.",
          "badges": ["React", "Redux", "Firebase", "Material-UI"],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.healthify.example"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "name": "project3",
          "type": "media-item",
          "heading": "CodeChef Clone",
          "mediaDetails": {
            "type": "image-slide",
            "src": [
              "https://placehold.co/1366X768/EED/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 1",
              "https://placehold.co/1366X768/EDE/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 2",
              "https://placehold.co/1366X768/EDD/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 3",
              "https://placehold.co/1366X768/DEE/31343C?font=montserrat&text=CodeChef Clone | Dummy Image 4"
            ]
          },
          "description": "A platform for competitive programming enthusiasts. Users can solve challenges, participate in contests, and track their progress.",
          "badges": ["React", "Node.js", "MongoDB", "Express.js"],
          "buttons": [
            {
              "text": "Visit",
              "link": "https://www.codechefclone.example"
            }
          ]
        }
      ]
    }
  ],
  "footer": {
    "heading": "Raj",
    "content": "<p>Let's collaborate and bring your ideas to life!</p>",
    "socials": [
      {
        "name": "Linkedin",
        "icon": "fa-brands fa-linkedin-in",
        "link": "https://www.linkedin.com/in/raj-example"
      },
      {
        "name": "Github",
        "icon": "fa-brands fa-github",
        "link": "https://github.com/raj-example"
      },
      {
        "name": "Mail ID",
        "icon": "fa-solid fa-envelope",
        "link": "mailto:raj@example.com"
      }
    ]
  }
}
```
