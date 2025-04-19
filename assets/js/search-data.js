// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-center-for-artificial-intelligence-and-robotics-cair",
          title: 'Center for Artificial Intelligence and Robotics (CAIR)',
          description: "DRDO lab focused on AI and robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-predictable-performance-algorithms-for",
          title: 'Predictable Performance Algorithms for',
          description: "Algorithms for reliable multi-robot surveillance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-cair-drdo-mobile-robot-navigation",
          title: 'CAIR-DRDO Mobile Robot Navigation',
          description: "Development of algorithms for mobile robot navigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-digital-terrain-estimation-using-ladar-system-dtels",
          title: 'Digital Terrain Estimation using LADAR System (DTELS)',
          description: "Terrain mapping with LADAR",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-simultaneous-localization-and-mapping-slam",
          title: 'Simultaneous Localization and Mapping (SLAM)',
          description: "Truly autonomous mobile robot navigation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project/";
            },},{id: "projects-snake-robots-for-outdoor-applications",
          title: 'Snake Robots for Outdoor Applications',
          description: "Design and deployment of snake robots for rugged environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_project/";
            },},{id: "projects-slam-for-autonomous-navigation-brns-barc",
          title: 'SLAM for Autonomous Navigation (BRNS-BARC)',
          description: "SLAM development/testing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_project/";
            },},{id: "projects-snake-robots-for-search-and-rescue-drdo-extra-mural",
          title: 'Snake Robots for Search and Rescue (DRDO-Extra Mural)',
          description: "DRDO-funded external project for rescue robots.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_project/";
            },},{id: "projects-autonomous-navigation-algorithms-for-outdoor-environments",
          title: 'Autonomous Navigation Algorithms for Outdoor Environments',
          description: "Algorithms for unstructured outdoor navigation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_project/";
            },},{id: "projects-vision-based-algorithms-for-outdoor-navigation-vbaon",
          title: 'Vision-Based Algorithms for Outdoor Navigation (VBAON)',
          description: "Vision-driven navigation in outdoor settings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/19_project/";
            },},{id: "projects-behavioral-and-motion-planner-coordination-bbpc",
          title: 'Behavioral and Motion Planner Coordination (BBPC)',
          description: "Setup and Exploration of Relation between the Behavioral Planner and Motion Planner for an Autonomous Vehicle in Dynamic Environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-vision-based-localization-and-slam-vbl-slam",
          title: 'Vision-Based Localization and SLAM (VBL-SLAM)',
          description: "Combines vision-based localization with SLAM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/20_project/";
            },},{id: "projects-localization-and-navigation-in-gps-denied-environments-lngde",
          title: 'Localization and Navigation in GPS-Denied Environments (LNGDE)',
          description: "Navigation without GPS reliance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/21_project/";
            },},{id: "projects-multi-robot-autonomous-exploration-localization-and-mapping",
          title: 'Multi-Robot Autonomous Exploration, Localization, and Mapping',
          description: "Collaborative multi-robot SLAM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/22_project/";
            },},{id: "projects-behavioral-and-motion-planner-coordination-bbpc",
          title: 'Behavioral and Motion Planner Coordination (BBPC)',
          description: "Setup and Exploration of Relation between the Behavioral Planner and Motion Planner for an Autonomous Vehicle in Dynamic Environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/23_project/";
            },},{id: "projects-behavioral-and-motion-planner-coordination-bbpc",
          title: 'Behavioral and Motion Planner Coordination (BBPC)',
          description: "Setup and Exploration of Relation between the Behavioral Planner and Motion Planner for an Autonomous Vehicle in Dynamic Environments.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/24_project/";
            },},{id: "projects-parallelized-segmentation-for-monocular-cameras-with-temporal",
          title: 'Parallelized Segmentation for Monocular Cameras with Temporal',
          description: "Real-time segmentation for monocular vision.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/25_project/";
            },},{id: "projects-integrated-indoor-navigation-system-uurmi",
          title: 'Integrated Indoor Navigation System (UURMI)',
          description: "Unified Urban Robotics Mobility Interface.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/26_project/";
            },},{id: "projects-independent-motion-detection-segmentation-for-moving-monocular-cameras-imdmmc",
          title: 'Independent Motion Detection/Segmentation for Moving Monocular Cameras (IMDMMC)',
          description: "Motion analysis for monocular systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/27_project/";
            },},{id: "projects-rcs-framework-exploration-and-implementation-rfei",
          title: 'RCS Framework Exploration and Implementation (RFEI)',
          description: "Robotic Control System (RCS) framework development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/28_project/";
            },},{id: "projects-solution-in-the-mahindra-rise-driverless-car-challenge-smdcc",
          title: 'Solution in the Mahindra Rise Driverless Car Challenge (SMDCC)',
          description: "Competition entry for autonomous driving.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/29_project/";
            },},{id: "projects-collaborative-simultaneous-localization-and-mapping-cslam",
          title: 'Collaborative Simultaneous Localization and Mapping (CSLAM)',
          description: "Algorithm enabling SLAM in low-powered devices with real-time collaboration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-autonomous-driving-for-indian-roads-qif",
          title: 'Autonomous Driving for Indian Roads (QIF)',
          description: "Quadricycle for Indian Food",
          section: "Projects",handler: () => {
              window.location.href = "/projects/30_project/";
            },},{id: "projects-autonomous-urban-exploration-aue",
          title: 'Autonomous Urban Exploration (AUE)',
          description: "Navigation in urban environments without human intervention.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/31_project/";
            },},{id: "projects-fast-obstacle-avoidance-for-quadrotor-systems-foaqs",
          title: 'Fast Obstacle Avoidance for Quadrotor Systems (FOAQS)',
          description: "Real-time obstacle avoidance for drones.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/32_project/";
            },},{id: "projects-smdcc-phase-2",
          title: 'SMDCC Phase 2',
          description: "Continuation of the Mahindra Rise Challenge entry.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/33_project/";
            },},{id: "projects-rrc-aue2-rockwellcol",
          title: 'RRC-AUE2-RockwellCol',
          description: "Phase 2 of Autonomous Urban Exploration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/34_project/";
            },},{id: "projects-safe-navigation-requirements-in-unstructured-conditions-snruc",
          title: 'Safe Navigation Requirements in Unstructured Conditions (SNRUC)',
          description: "Safety protocols for unpredictable environments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/35_project/";
            },},{id: "projects-topomap-for-sensory-data-rrc-rapyuta-tiat",
          title: 'TopoMap for Sensory Data (RRC-RAPYUTA-TIAT)',
          description: "Topological mapping using sensors",
          section: "Projects",handler: () => {
              window.location.href = "/projects/36_project/";
            },},{id: "projects-autonomous-urban-exploration-phase-iii-aue-ph-iii",
          title: 'Autonomous Urban Exploration Phase III (AUE-Ph-III)',
          description: "Advanced phase of urban exploration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/37_project/";
            },},{id: "projects-center-for-artificial-intelligence-and-robotics-cair",
          title: 'Center for Artificial Intelligence and Robotics (CAIR)',
          description: "DRDO lab focused on AI and robotics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/38_project/";
            },},{id: "projects-development-of-a-self-operating-passenger-drone",
          title: 'Development of a self-operating passenger drone',
          description: "Design and Fabrication of Autonomous Passenger Drone (DFAPD)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-exploration-of-learning-and-classical-approaches-for-navigation",
          title: 'Exploration of Learning and Classical Approaches for Navigation',
          description: "Navigation without HD maps using hybrid learning/classical methods.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-autonomous-driving-in-adverse-conditions-adac",
          title: 'Autonomous Driving in Adverse Conditions (ADAC)',
          description: "Self-driving systems optimized for extreme weather, poor visibility, etc.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-robotics-courseware-rc",
          title: 'Robotics Courseware (RC)',
          description: "Educational/training materials for industries and startups in robotics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-semantic-and-active-slam-with-behavior-learning-sasbl",
          title: 'Semantic and Active SLAM with Behavior Learning (SASBL)',
          description: "Combines semantic SLAM, active exploration, and behavioral learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-semantic-navigation-for-robots-snfr",
          title: 'Semantic Navigation for Robots (SNFR)',
          description: "Navigation using semantic scene understanding (e.g., object recognition).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-task-and-motion-planning-for-visual-object-rearrangement",
          title: 'Task and Motion Planning for Visual Object Rearrangement',
          description: "Planning and executing object rearrangement tasks using vision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6B%72%69%73%68%6E%61@%69%69%69%74.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/madhava-krishna-49371313", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QDuPGHwAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/38201465600", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
