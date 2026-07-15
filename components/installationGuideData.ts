import {
  Tv,
  Smartphone,
  Monitor,
  Apple,
  Box,
  Laptop,
  Zap,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface GuideStep {
  title: string;
  description: string;
  note?: string;
  noteLabel?: string;
}

export interface InfoBox {
  label: string;
  value: string;
  type: "time" | "apps" | "devices" | "works-on";
}

export interface TroubleshootingItem {
  question: string;
  answer: string;
}

export interface MethodSection {
  title: string;
  steps: GuideStep[];
}

export interface BrandAppGuide {
  brand: string;
  storeNote: string;
  apps: string[];
}

export interface DeviceGuide {
  id: string;
  name: string;
  icon: LucideIcon;
  titlePrefix: string;
  titleDevice: string;
  description: string;
  infoBoxes: InfoBox[];
  beforeStart?: string[];
  beforeStartTitle?: string;
  importantNote?: string;
  steps?: GuideStep[];
  methods?: MethodSection[];
  appNote?: string;
  brandAppsTitle?: string;
  brandApps?: BrandAppGuide[];
  alternativeSection?: {
    title: string;
    steps: GuideStep[];
    note?: string;
  };
  subSections?: {
    title: string;
    steps: GuideStep[];
  }[];
  troubleshooting?: TroubleshootingItem[];
}

export const deviceGuides: DeviceGuide[] = [
  {
    id: "firestick",
    name: "Firestick / Fire TV",
    icon: Tv,
    titlePrefix: "How to Install",
    titleDevice: "Firestick?",
    description:
      "Amazon Firestick is one of the easiest ways to run your Trex IPTV subscription on your big screen. The full Trex IPTV setup on Firestick takes under 5 minutes and works on every Firestick and Fire TV model available.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Recommended Apps",
        value: "IPTV Smarters Pro / TiviMate / M3U Player",
        type: "apps",
      },
    ],
    steps: [
      {
        title: "STEP 1: Turn On Apps From Unknown Sources",
        description:
          "Open your Firestick home screen and go to Settings. After this, click on My Fire TV. Then tap on Developer Options. Finally, switch on Apps from Unknown Sources.",
        note: "This is required to sideload any IPTV player onto your Firestick.",
      },
      {
        title: "STEP 2: Download the Downloader App",
        description:
          "Go back to the home screen. Open the search bar. Type Downloader in the search bar. After this, select and install the free official app from the results.",
      },
      {
        title: "STEP 3: Enable Downloader Permissions",
        description:
          "Go back to Settings. Click My Fire TV, then Developer Options, and find Downloader in the list. After finding the downloader, turn its unknown sources permission on.",
      },
      {
        title: "STEP 4: Open Downloader and Enter the Code",
        description:
          "Launch Downloader. Tap the URL bar, and enter the Trex IPTV downloader code 686147 to pull the IPTV player APK file directly.",
        note: "We send you the exact download URL via WhatsApp or email after you get your Trex IPTV subscription.",
      },
      {
        title: "STEP 5: Install the IPTV Player",
        description:
          "Once the APK file finishes downloading tap Install and wait a few seconds for the player to set up on your Firestick.",
      },
      {
        title: "STEP 6: Open the App and Select Login Method",
        description:
          "Launch the IPTV player. After launching, tap Add New User or Login. Then, select Xtream Codes API from the available login options.",
      },
      {
        title: "STEP 7: Enter Your Trex IPTV Login Credentials",
        description:
          "Type in the username, password, and server URL exactly as we sent them to you via WhatsApp or email after your Trex IPTV subscription was activated.",
        note: "Double-check there are no spaces before or after your credentials when entering them.",
      },
      {
        title: "STEP 8: Select Your Content and Start Watching",
        description:
          "Once connected, choose your preferred channel group or VOD library. Finally, tap any title to start streaming in full HD, UHD, or 4K instantly.",
      },
    ],
  },
  {
    id: "smart-tv",
    name: "Smart TV",
    icon: Tv,
    titlePrefix: "Step-by-step Guide to Install",
    titleDevice: "Smart TV",
    description:
      "You can set up Trex IPTV on your Smart TV in simple, easy steps. Moreover, the whole setup takes less than 5 minutes from start to finish.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Compatible TV Brands",
        value: "Samsung / LG / Sony / Hisense / Philips / TCL/ Most Modern Smart Televisions",
        type: "devices",
      },
    ],
    steps: [
      {
        title: "STEP 1: Launch Your TV App Store",
        description:
          "First, press the Home button on your remote. Then, open the App Store, Content Store, or Google Play Store, depending on your TV brand.",
      },
      {
        title: "STEP 2: Pick the Right App for Your TV Brand",
        description:
          "Each Smart TV brand supports different IPTV player apps, so use the guide below to find the best one for your television.",
        note: "We will confirm the exact app name for your TV model via WhatsApp after your Trex IPTV subscription is activated.",
        noteLabel: "App Note",
      },
      {
        title: "STEP 3: Install and Launch the App",
        description:
          "Select your preferred app from the search results. Press install and once it finishes, open it directly from your TV home screen.",
      },
      {
        title: "STEP 4: Choose Your Login Method",
        description:
          "Inside the app, tap Add Playlist or Login. After this, select Xtream Codes API as your preferred connection method for the smoothest experience.",
      },
      {
        title: "STEP 5: Enter Your Trex IPTV Login Credentials",
        description:
          "Type in the username, password, and server URL that we sent you via WhatsApp or email after your Trex IPTV subscription was confirmed.",
        note: "If your app asks for an M3U URL instead, we provide that too. Just let our team know via WhatsApp.",
      },
      {
        title: "STEP 6: Load Your Channels and Start Streaming",
        description:
          "The app pulls in all the channels automatically. Browse your channel list, pick anything you want. Enjoy Trex IPTV on your big screen in full HD, UHD, and 4K.",
      },
    ],
    brandAppsTitle: "Which App to Use on Your Smart TV:",
    brandApps: [
      {
        brand: "Samsung Smart TV",
        storeNote: "Search for any of these in the Samsung App Store:",
        apps: ["Ibo TV Player", "Ibo Pro Player", "Smart One IPTV", "IPTV Smarters Pro"],
      },
      {
        brand: "LG Smart TV",
        storeNote: "Search for any of these in the LG Content Store:",
        apps: ["Hot IPTV", "Bob Player", "MyTV Online", "IPTV Smarters Pro"],
      },
      {
        brand: "Sony / Android TV",
        storeNote: "Open Google Play Store on your Sony TV and search for:",
        apps: ["IPTV Smarters Pro", "Ibo Player Pro", "GSE Smart IPTV", "TiviMate"],
      },
      {
        brand: "Hisense / Philips / TCL",
        storeNote: "These run on Android TV, so open Google Play Store and search for:",
        apps: ["IPTV Smarters Pro", "Perfect Player", "GSE Smart IPTV"],
      },
    ],
  },
  {
    id: "android-box",
    name: "Android Box / Android TV",
    icon: Box,
    titlePrefix: "How to Install",
    titleDevice: "Android Boxes and Android TV",
    description:
      "You can install Trex IPTV on any Android Box or Android TV device with no technical skills needed.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "Nvidia Shield / Xiaomi Mi Box / H96 Max / X96 Mini / Chromecast with Google TV / Sony Android TV",
        type: "devices",
      },
    ],
    beforeStartTitle: "BEFORE YOU START, Have These Ready:",
    beforeStart: [
      "Your Trex IPTV login credentials (username, password, and server URL sent via WhatsApp or email after purchase)",
      "A stable internet connection of at least 10 Mbps for HD or 25 Mbps for 4K",
      "Your Android Box connected to your TV and powered on",
    ],
    methods: [
      {
        title: "METHOD 1: Install via Google Play Store (Easiest)",
        steps: [
          {
            title: "STEP 1: Open Google Play Store",
            description:
              "From your Android Box or Android TV home screen, press the home button on your remote. And open the Google Play Store app.",
          },
          {
            title: "STEP 2: Search for Your Preferred IPTV Player",
            description:
              "Type the name of your preferred app in the search bar and hit enter. We recommend any of these: TiviMate IPTV Player, IPTV Smarters Pro, GSE Smart IPTV, Perfect Player.",
          },
          {
            title: "STEP 3: Install the App",
            description:
              "Select the app from the search results. Click or tap on Install. Wait for the download to complete or finish properly and then tap Open to launch it.",
          },
          {
            title: "STEP 4: Select Your Login Method",
            description:
              "Inside the app, tap Add Playlist or Add New User and then choose Xtream Codes API as your connection method for the best experience.",
          },
          {
            title: "STEP 5: Enter Your Trex IPTV Login Credentials",
            description:
              "Fill in the username, password, and server URL exactly as we sent them to you after your Trex IPTV subscription was activated. Double-check there are no extra spaces.",
          },
          {
            title: "STEP 6: Wait for Channels to Load",
            description:
              "The app will connect to the Trex IPTV server and pull in your full channel list, VOD library, and EPG guide automatically. This usually takes around 30 seconds.",
          },
          {
            title: "STEP 7: Pick a Channel and Start Watching",
            description:
              "Browse through all live channels, movies, and series and tap anything to start streaming in HD, UHD, or 4K on your big screen instantly.",
          },
        ],
      },
      {
        title: "METHOD 2: Install via Downloader App (If App Not on Play Store)",
        steps: [
          {
            title: "STEP 1: Enable Unknown Sources",
            description:
              "Go to Settings on your Android Box. Then, Security or Privacy. Turn on Install from Unknown Sources or Allow Unknown Apps.",
          },
          {
            title: "STEP 2: Download the Downloader App",
            description:
              "Open the Google Play Store. Search for Downloader and install the free app. This lets you sideload any APK file directly onto your device.",
          },
          {
            title: "STEP 3: Open Downloader and Enter the Code",
            description:
              "Launch Downloader and tap the URL or code bar. Enter the Trex IPTV downloader code 686147 to fetch the IPTV player APK directly.",
            note: "We also send you the exact APK download link via WhatsApp after your Trex IPTV subscription is confirmed.",
          },
          {
            title: "STEP 4: Install the APK",
            description:
              "Once the file downloads, a pop-up will appear. Tap Install and wait a few seconds for the player to finish setting up on your Android Box.",
          },
          {
            title: "STEP 5: Enter Your Trex IPTV Login Credentials",
            description:
              "Open the newly installed player. Choose Xtream Codes API as your login method. Then, enter your username, password, and server URL as provided.",
          },
          {
            title: "STEP 6: Load Your Content and Enjoy",
            description:
              "Your full Trex IPTV channel list, including live TV, sports, movies, and series, loads automatically. Pick anything and start watching right away.",
          },
        ],
      },
    ],
    troubleshooting: [
      {
        question: "Buffering or freezing?",
        answer:
          "Switch from Wi-Fi to a wired Ethernet connection and make sure your speed is at least 25 Mbps for 4K streaming.",
      },
      {
        question: "Channels not loading?",
        answer:
          "Double-check your Trex IPTV login credentials for any typos or extra spaces and re-enter them carefully.",
      },
      {
        question: "App not showing in the Play Store?",
        answer:
          "Use Method 2 above with the Downloader app and code 686147 to install it directly.",
      },
      {
        question: "App installed, but nothing is playing?",
        answer:
          "Restart your Android Box, reopen the player, and try reconnecting with your credentials again.",
      },
    ],
  },
  {
    id: "ios",
    name: "iPhone / iPad / iOS",
    icon: Apple,
    titlePrefix: "How to Set Up",
    titleDevice: "iPhone & iPad?",
    description:
      "Trex IPTV for iPhone and iPad runs through dedicated player apps available directly on the Apple App Store.",
    infoBoxes: [
      { label: "Estimated Time", value: "~4 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "iPhone (All Models) / iPad / iPad Pro / iPad Mini / iPad Air",
        type: "devices",
      },
    ],
    beforeStartTitle: "BEFORE YOU START, Have These Ready:",
    beforeStart: [
      "Your Trex IPTV login credentials (username, password, and server URL) sent to you via WhatsApp or email after purchase",
      "A stable internet connection of at least 10 Mbps for HD or 25 Mbps for 4K",
      "Your Apple ID logged in, and the App Store ready on your device",
    ],
    steps: [
      {
        title: "STEP 1: Open the Apple App Store",
        description:
          "Tap the App Store icon on your iPhone or iPad and go to the Search tab at the bottom of the screen.",
      },
      {
        title: "STEP 2: Search and Install Your Preferred App",
        description:
          "Type the app name in the search bar, tap Get, and wait for it to install. Choose any of these fully compatible iOS apps: iPlayTV AIO App, Ibo Player Pro, GSE Smart IPTV, VU IPTV Player.",
      },
      {
        title: "STEP 3: Open the App and Add Your Playlist",
        description:
          "After the completion of installation, launch the app. Tap Add Playlist or Add Source, and choose between Xtream Codes API or M3U URL as your connection method.",
        note: "We recommend the Xtream Codes API as it loads faster. Moreover, it supports VOD better and gives you a more stable Trex IPTV experience on iOS.",
      },
      {
        title: "STEP 4: Enter Your Trex IPTV Login Credentials",
        description:
          "Type in the server URL, username, and password exactly as received in your WhatsApp or email confirmation after your Trex IPTV subscription was activated.",
        note: "Make sure there are no extra spaces before or after any of the fields as this is the most common reason credentials fail on iOS devices.",
      },
      {
        title: "STEP 5: Let the Channel List Load",
        description:
          "Tap Connect or Add User and give the app around 20 to 30 seconds to pull in your full channel list, VOD library, and EPG guide from the Trex IPTV server.",
      },
      {
        title: "STEP 6: Browse and Start Streaming",
        description:
          "Your complete Trex IPTV library is now ready. Browse live channels, sports, movies, and series. Tap anything to start watching in HD or 4K on your iPhone or iPad from anywhere in the world.",
      },
    ],
    troubleshooting: [
      {
        question: "App not finding channels?",
        answer:
          "Double-check your Trex IPTV login credentials. You must make sure that you selected the Xtream Codes API and not M3U if you entered three separate fields.",
      },
      {
        question: "Buffering on mobile data?",
        answer:
          "Switch to a Wi-Fi connection or lower the stream quality inside the app settings for a smoother experience on cellular.",
      },
      {
        question: "Credentials not working?",
        answer:
          "Copy and paste them directly from your WhatsApp or email rather than typing manually to avoid any typo errors.",
      },
      {
        question: "App keeps crashing?",
        answer:
          "Delete the app, reinstall it fresh from the App Store. After this, re-enter your details from scratch.",
      },
    ],
  },
  {
    id: "mag-box",
    name: "MAG Box / STB Devices",
    icon: Box,
    titlePrefix: "How to Set Up or Install",
    titleDevice: "MAG Box?",
    description:
      "If you want to set Trex IPTV on your MAG Box, you need to do it through the portal URL method. The whole installation process takes less than 5 minutes.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Compatible Models",
        value: "MAG 250 / MAG 254 / MAG 256 / MAG 322 / MAG 420 / MAG 424 / MAG 524",
        type: "devices",
      },
    ],
    importantNote:
      "MAG Box setup works differently from other devices. Instead of entering a username and password, you provide us with your MAC address, and we bind it to your Trex IPTV subscription on our server within minutes.",
    steps: [
      {
        title: "STEP 1: Connect Your MAG Box to the TV",
        description:
          "Plug your MAG Box into your television using an HDMI cable and connect it to your home internet via Ethernet cable or Wi-Fi for a stable connection.",
      },
      {
        title: "STEP 2: Find and Send Us Your MAC Address",
        description:
          "On your MAG Box remote, press the Setup or Menu button. After this, go to System Settings and look for Network or About. Your MAC address appears in the format 00:1A:79:XX:XX:XX. Send it to our team on WhatsApp right away.",
        note: "You can also find the MAC address printed on the sticker at the bottom of your physical MAG Box device.",
      },
      {
        title: "STEP 3: We Activate Your Trex IPTV Subscription",
        description:
          "Once we receive your MAC address our team binds it to your Trex IPTV account on our server. Finally, you will get back your portal URL via WhatsApp or email.",
      },
      {
        title: "STEP 4: Open MAG Box Settings",
        description:
          "On your remote press the Menu or Setup button and navigate to System Settings then select Servers from the available options on screen.",
      },
      {
        title: "STEP 5: Go to Portals",
        description:
          "Inside the Servers menu select Portals to open the portal configuration screen where you will enter your Trex IPTV portal address.",
      },
      {
        title: "STEP 6: Enter Your Portal URL",
        description:
          "In the Portal 1 Name field type any name you like such as Trex IPTV. Then in the Portal 1 URL field paste the portal address we sent you exactly as provided without any extra spaces.",
        note: "Copy and paste the portal URL directly from your WhatsApp or email message to avoid any typing errors.",
      },
      {
        title: "STEP 7: Save Your Settings",
        description:
          "Press OK on your remote to save everything. Then press Exit or Back until you return to the main screen of your MAG Box.",
      },
      {
        title: "STEP 8: Restart Your MAG Box",
        description:
          "Select Restart Portal from the menu or simply unplug your MAG Box from power, wait 10 seconds and plug it back in to apply all the settings properly.",
      },
      {
        title: "STEP 9: Browse and Start Watching",
        description:
          "Your MAG Box will automatically load the Trex IPTV portal after restarting. Use your remote to access live channels, movies, and series and start streaming in HD and 4K right away.",
      },
    ],
  },
  {
    id: "pc-mac",
    name: "Windows PC & Mac",
    icon: Laptop,
    titlePrefix: "How to Install",
    titleDevice: "Windows PC and Mac?",
    description:
      "You can easily set up Trex IPTV on your Windows PC or Mac in just a few minutes using a dedicated desktop IPTV player.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "Windows 10 / Windows 11 / MacBook Air / MacBook Pro / iMac / Mac Mini / Surface Pro",
        type: "devices",
      },
    ],
    subSections: [
      {
        title: "FOR WINDOWS PC",
        steps: [
          {
            title: "STEP 1: Open Microsoft Store",
            description:
              "Click the Start button on your Windows PC. Search for Microsoft Store and open it from the results.",
          },
          {
            title: "STEP 2: Search and Install Your Preferred App",
            description:
              "Type the app name in the Microsoft Store search bar and install any of these fully compatible Windows apps: Ibo Player (clean and simple interface, great for live TV and VOD on Windows), IPTV Expert (lightweight player with full Xtream Codes and M3U support).",
            note: "Both apps are free to download from the Microsoft Store and work perfectly with your Trex IPTV subscription credentials.",
          },
          {
            title: "STEP 3: Open the App and Choose Login Method",
            description:
              "Launch the app after installation, look for Add Playlist or Login and select Xtream Codes API for the smoothest and most reliable connection.",
          },
          {
            title: "STEP 4: Enter Your Trex IPTV Login Credentials",
            description:
              "Please enter your server URL, username, and password exactly as we sent them to you. Copy and paste directly from your WhatsApp or email to avoid any typing mistakes.",
          },
          {
            title: "STEP 5: Load Channels and Start Watching",
            description:
              "The app connects to the Trex IPTV server and pulls in your full channel list automatically. Browse live channels, movies, and series and start streaming in HD or 4K on your desktop or laptop screen.",
          },
        ],
      },
      {
        title: "FOR Mac",
        steps: [
          {
            title: "STEP 1: Open the App Store",
            description:
              "Click the App Store icon in your Mac dock or search for it via Spotlight and open it on your MacBook or iMac.",
          },
          {
            title: "STEP 2: Search for an IPTV Player",
            description:
              "Type IPTV player in the App Store search bar and install any of these compatible Mac apps: IPTV Smarters Pro (popular choice, supports Xtream Codes and M3U on macOS), GSE Smart IPTV (feature rich with full EPG support and clean Mac interface), Ibo Player (simple and fast, works great for everyday Trex IPTV streaming on Mac).",
          },
          {
            title: "STEP 3: Open the App and Add Your Playlist",
            description:
              "Launch the app once installed, tap Add Source or Add Playlist and choose Xtream Codes API as your preferred login method.",
          },
          {
            title: "STEP 4: Enter Your Trex IPTV Login Credentials",
            description:
              "Type in the server URL, username and password sent to you after your Trex IPTV subscription was confirmed. Double check every field before hitting connect.",
          },
          {
            title: "STEP 5: Browse and Start Streaming",
            description:
              "Your complete Trex IPTV library loads within seconds. Pick any live channel, movie or series and enjoy buffer-free streaming on your Mac screen.",
          },
        ],
      },
    ],
    alternativeSection: {
      title: "ALTERNATIVE METHOD — VLC Media Player (Windows and Mac)",
      steps: [
        {
          title: "STEP 1: Download VLC",
          description:
            "Visit videolan.org and download the free VLC Media Player for your Windows or Mac device.",
        },
        {
          title: "STEP 2: Open Network Stream",
          description:
            "Launch VLC, click on Media at the top menu on Windows or File on Mac. Then, select Open Network Stream from the dropdown.",
        },
        {
          title: "STEP 3: Paste Your M3U URL",
          description:
            "Copy your Trex IPTV M3U URL exactly as we sent it to you and paste it into the network URL field then click Play.",
          note: "VLC works well for basic streaming but dedicated IPTV apps like Ibo Player or IPTV Smarters Pro give a far better experience with full EPG, catch-up TV and organized channel lists.",
        },
      ],
    },
    troubleshooting: [
      {
        question: "App not in Microsoft Store?",
        answer:
          "Search for IPTV Expert or Ibo Player by exact name and make sure your Windows is updated to the latest version.",
      },
      {
        question: "Credentials not working on Mac?",
        answer:
          "Paste your server URL, username and password directly from your email rather than retyping them manually.",
      },
      {
        question: "Buffering on PC or Mac?",
        answer:
          "To avoid buffering your internet speed is at least 25 Mbps for 4K and connect via Ethernet instead of Wi-Fi for the most stable stream.",
      },
      {
        question: "VLC not playing the M3U link?",
        answer:
          "Make sure your M3U URL is complete and has not been cut off and try copying it again fresh from your WhatsApp message.",
      },
    ],
  },
  {
    id: "android-phone",
    name: "Android Smartphones & Tablets",
    icon: Smartphone,
    titlePrefix: "How to Install",
    titleDevice: "Android Smartphones and Tablets?",
    description:
      "You can download or install Trex IPTV on your Android phone or tablet easily. It is one of the quickest setups of all.",
    infoBoxes: [
      { label: "Estimated Time", value: "~3 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "Samsung Galaxy / OnePlus / Xiaomi / Huawei / Oppo / Realme / Sony Xperia / All Android Tablets",
        type: "devices",
      },
    ],
    methods: [
      {
        title: "METHOD 1: Install via Google Play Store (Recommended)",
        steps: [
          {
            title: "STEP 1: Open Google Play Store",
            description:
              "Tap the Play Store icon on your Android phone or tablet home screen and go to the search bar at the top.",
          },
          {
            title: "STEP 2: Search and Install Your Preferred IPTV App",
            description:
              "Type the app name in the search bar and install any of these fully compatible Android apps: IPTV Smarters Pro, TiviMate IPTV Player, GSE Smart IPTV, Perfect Player, Ibo Player Pro.",
            note: "Not sure which app to pick? Message our team on WhatsApp and we will recommend the best one for your specific Android device.",
          },
          {
            title: "STEP 3: Open the App After Installation",
            description:
              "Once the app after the downloading is complete. Tap Open or find it on your home screen and launch it to begin the setup process.",
          },
          {
            title: "STEP 4: Select Your Login Method",
            description:
              "Inside the app tap Add Playlist or Add New User. Choose Xtream Codes API from the available options for the best Trex IPTV experience on Android.",
          },
          {
            title: "STEP 5: Enter Your Trex IPTV Login Credentials",
            description:
              "Fill in the server URL, username and password exactly as we sent them to you via WhatsApp or email after your Trex IPTV subscription was activated.",
            note: "Copy and paste your credentials directly from your WhatsApp message instead of typing them manually to avoid any errors.",
          },
          {
            title: "STEP 6: Wait for Your Channel List to Load",
            description:
              "Tap Connect or Add User and give the app around 20 to 30 seconds to pull in your full channel list, VOD library and EPG guide from the Trex IPTV server.",
          },
          {
            title: "STEP 7: Start Watching on Your Android Device",
            description:
              "Your complete Trex IPTV library is now live on your phone or tablet.",
          },
        ],
      },
      {
        title: "METHOD 2 — Install via APK Direct Download",
        steps: [
          {
            title: "STEP 1: Enable Unknown Sources",
            description:
              "Go to your Android phone Settings, tap Security or Privacy and turn on Install from Unknown Sources or Allow Apps from Unknown Sources.",
          },
          {
            title: "STEP 2: Download the APK File",
            description:
              "Open your phone browser and enter the download link we send you via WhatsApp after your Trex IPTV subscription is confirmed. The APK file will download in seconds.",
          },
          {
            title: "STEP 3: Install the APK",
            description:
              "After the completion of download, tap the file from your notifications bar or Downloads folder. Click Install when the prompt appears on screen.",
          },
          {
            title: "STEP 4: Open the App and Enter Your Credentials",
            description:
              "Launch the newly installed app, and choose Xtream Codes API as your login method. Then, enter your Trex IPTV username, password and server URL as provided.",
          },
          {
            title: "STEP 5: Load Channels and Enjoy",
            description:
              "Your full channel list loads automatically within seconds. Pick any live channel, movie or series and start streaming right away on your Android device.",
          },
        ],
      },
    ],
  },
  {
    id: "stb-emulator",
    name: "STB Emulator",
    icon: Monitor,
    titlePrefix: "Step by Step Guide to Set Up",
    titleDevice: "STB Emulator",
    description:
      "STB Emulator turns your Android phone, tablet or Android Box into a virtual MAG set-top box. Hence, it gives you the full MAG portal experience without needing physical hardware.",
    infoBoxes: [
      { label: "Estimated Time", value: "~5 Minutes", type: "time" },
      {
        label: "Works On",
        value: "Android Phones / Android Tablets / Android Box / Nvidia Shield / Xiaomi Mi Box / Firestick (via sideload)",
        type: "works-on",
      },
    ],
    steps: [
      {
        title: "STEP 1: Download STB Emulator from Google Play Store",
        description:
          "Open the Google Play Store on your Android device. Search for STB Emulator and install the free version. It appears as STB Emu in the search results.",
      },
      {
        title: "STEP 2: Launch STB Emulator",
        description:
          "After the installation finishes, tap Open. Now, let the app load fully on your Android device before moving to the next step.",
      },
      {
        title: "STEP 3: Find Your Virtual MAC Address",
        description:
          "When STB Emulator opens it will show you a virtual MAC address on the loading screen. Write it down or take a screenshot as you will need to send this to our team.",
        note: "This virtual MAC address is what links your STB Emulator to your Trex IPTV subscription on our server so do not skip this step.",
      },
      {
        title: "STEP 4: Send Your MAC Address to Our Team",
        description:
          "Send your STB Emulator virtual MAC address to our team via WhatsApp right away. We will bind it to your Trex IPTV account and send you back your portal URL within 5 minutes.",
      },
      {
        title: "STEP 5: Open STB Emulator Settings",
        description:
          "Tap anywhere on the STB Emulator screen to reveal the menu. Then, tap the three dot menu icon or settings gear in the top corner of the screen.",
      },
      {
        title: "STEP 6: Go to Profiles",
        description:
          "From the settings menu select Profiles and then tap the existing profile or tap the plus icon to create a new profile for your Trex IPTV connection.",
      },
      {
        title: "STEP 7: Select Portal Settings",
        description:
          "Inside the profile options tap Portal Settings or Portal URL. This is where you will enter the Trex IPTV portal address we sent you via WhatsApp or email.",
      },
      {
        title: "STEP 8: Enter Your Trex IPTV Portal URL",
        description:
          "Paste the portal URL exactly as we sent it into the Portal URL field. Make sure there are no extra spaces before or after the link, and then tap OK to save.",
        note: "Copy and paste the portal URL directly from your WhatsApp message rather than typing it manually to avoid any errors.",
      },
      {
        title: "STEP 9: Save and Restart the App",
        description:
          "Tap Save or OK to confirm your settings. After this, close STB Emulator completely and reopen it fresh so the portal loads correctly with your Trex IPTV subscription.",
      },
      {
        title: "STEP 10: Browse and Start Watching",
        description:
          "STB Emulator will now load the full Trex IPTV portal interface on your screen. Use the virtual remote and access the channels library.",
      },
    ],
  },
  {
    id: "enigma2",
    name: "Enigma2 / Dreambox",
    icon: Zap,
    titlePrefix: "How to Install",
    titleDevice: "Enigma2?",
    description:
      "Enigma2 receivers are powerful satellite boxes that support Trex IPTV through a dedicated plugin or M3U bouquet file.",
    infoBoxes: [
      { label: "Estimated Time", value: "~10 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "Dreambox / Vu+ Duo / Vu+ Solo / Zgemma H Series / Octagon / Gigablue / Clarke-Tech / Formuler F Series",
        type: "devices",
      },
    ],
    methods: [
      {
        title: "Install via Enigma2 Plugin (Recommended)",
        steps: [
          {
            title: "STEP 1: Connect Your Enigma2 Box to the Internet",
            description:
              "Make sure your Enigma2 receiver is connected to your home router via Ethernet cable for the most stable connection during setup and streaming.",
          },
          {
            title: "STEP 2: Find Your Receiver IP Address",
            description:
              "On your Enigma2 receiver remote press Menu. Go to Setup then select Network and find your IP address from the network information screen. Write it down.",
          },
          {
            title: "STEP 3: Open the Web Interface on Your PC",
            description:
              "On your laptop or PC open any browser and type your Enigma2 receiver IP address into the address bar. The Enigma2 web interface will open on your screen.",
          },
          {
            title: "STEP 4: Go to Plugin Browser",
            description:
              "Inside the web interface navigate to the Plugin section or open the Plugin Browser directly from your receiver remote by pressing Menu then going to Plugins.",
          },
          {
            title: "STEP 5: Search for E2M3U2Bouquet Plugin",
            description:
              "In the Plugin Browser search for E2M3U2Bouquet. This is the most reliable plugin for adding an M3U playlist as a full bouquet on your Enigma2 receiver.",
            note: "If the plugin does not appear in your list your receiver may need an internet connection refresh. Restart the box and try again.",
          },
          {
            title: "STEP 6: Install the Plugin",
            description:
              "Select E2M3U2Bouquet from the results. Then, press OK on your remote to install it. Wait for the installation to complete before moving forward.",
          },
          {
            title: "STEP 7: Open the Plugin Settings",
            description:
              "Once installed press Menu on your remote, go to Plugins and open E2M3U2Bouquet from your installed plugins list.",
          },
          {
            title: "STEP 8: Enter Your Trex IPTV M3U URL",
            description:
              "Inside the plugin settings find the M3U URL field and paste the Trex IPTV M3U URL we sent you via WhatsApp or email exactly as provided with no extra spaces.",
            note: "Copy the M3U URL directly from your WhatsApp message rather than typing it manually to avoid any mistakes that would prevent the bouquet from loading.",
          },
          {
            title: "STEP 9: Save Settings and Reload Bouquets",
            description:
              "Press OK to save your settings and then select Reload Bouquets from inside the plugin. The Trex IPTV channel list will now download and appear as a full bouquet on your receiver.",
          },
          {
            title: "STEP 10: Find Trex IPTV in Your Channel List",
            description:
              "Press the bouquet button on your Enigma2 remote and scroll through your bouquet list until you see the Trex IPTV bouquet appear. Select it to access all your channels.",
          },
          {
            title: "STEP 11: Start Watching",
            description:
              "Select any channel from your Trex IPTV bouquet and press OK on your remote to start streaming live TV, sports, movies and series in HD and 4K on your Enigma2 receiver.",
          },
        ],
      },
    ],
  },
  {
    id: "roku",
    name: "Roku Devices",
    icon: Radio,
    titlePrefix: "How to Set Up",
    titleDevice: "Roku?",
    description:
      "Roku does not support traditional IPTV player apps directly from its channel store; however, you can still enjoy your full Trex IPTV subscription on any Roku device using the screen mirroring method or a private Roku channel.",
    infoBoxes: [
      { label: "Estimated Time", value: "~7 Minutes", type: "time" },
      {
        label: "Compatible Devices",
        value: "Roku Express / Roku Express 4K / Roku Streaming Stick / Roku Streaming Stick 4K / Roku Ultra / Roku TV / Roku Premiere",
        type: "devices",
      },
    ],
    importantNote:
      "Roku has a closed app store and does not allow direct IPTV app installation like Android or Firestick. The two best methods to watch Trex IPTV on Roku are screen mirroring from your phone or PC and adding a private Roku channel. Both methods are explained below.",
    methods: [
      {
        title: "METHOD 1: Screen Mirroring from Android Phone (Easiest)",
        steps: [
          {
            title: "STEP 1: Enable Screen Mirroring on Your Roku",
            description:
              "On your Roku remote press Home, go to Settings then select System. Tap Screen Mirroring. Make sure it is set to Always Allow or Prompt.",
          },
          {
            title: "STEP 2: Install an IPTV App on Your Android Phone",
            description:
              "On your Android phone open Google Play Store, search for IPTV Smarters Pro or TiviMate and install either one. Enter your Trex IPTV login credentials inside the app to load your channels.",
          },
          {
            title: "STEP 3: Enable Screen Mirroring on Your Android Phone",
            description:
              "Swipe down from the top of your Android phone screen to open Quick Settings and tap Cast, Screen Mirror or Smart View depending on your phone brand.",
          },
          {
            title: "STEP 4: Select Your Roku Device",
            description:
              "Your Android phone will scan for nearby devices. Tap your Roku device name from the list and wait a few seconds for the connection to establish between the two devices.",
          },
          {
            title: "STEP 5: Open Your IPTV App and Start Watching",
            description:
              "Once connected, open your IPTV Smarters Pro or TiviMate app on your phone and your Roku TV screen will mirror everything in real time. Pick any channel and start streaming your Trex IPTV content on the big screen.",
          },
        ],
      },
      {
        title: "METHOD 2: Screen Mirroring from Windows PC",
        steps: [
          {
            title: "STEP 1: Enable Screen Mirroring on Your Roku",
            description:
              "Press Home on your Roku remote. Go to Settings then System and select Screen Mirroring. Set it to Always Allow so your PC can connect without interruption.",
          },
          {
            title: "STEP 2: Install an IPTV Player on Your Windows PC",
            description:
              "Open Microsoft Store on your Windows PC and install either Ibo Player or IPTV Expert. Enter your Trex IPTV login credentials to load your full channel list on the desktop player.",
          },
          {
            title: "STEP 3: Open Connect on Your Windows PC",
            description:
              "Press the Windows key and type Connect in the search bar. Open the Connect app which allows your PC to cast its screen wirelessly to nearby devices including your Roku.",
          },
          {
            title: "STEP 4: Cast Your PC Screen to Roku",
            description:
              "On your Windows PC go to Settings, then System and select Display. Scroll down and click Connect to a Wireless Display. Select your Roku device from the list to begin casting.",
          },
          {
            title: "STEP 5: Open Your IPTV Player and Enjoy",
            description:
              "Once your PC screen appears on your Roku TV, open your IPTV player app on the PC. Select any channel from your Trex IPTV library and start streaming live on your television.",
          },
        ],
      },
      {
        title: "METHOD 3: Add Private Roku Channel",
        steps: [
          {
            title: "STEP 1: Get the Private Channel Code",
            description:
              "Contact our team on WhatsApp after activating your Trex IPTV subscription and request the private Roku channel access code. We will send it to you within minutes.",
          },
          {
            title: "STEP 2: Visit the Roku Private Channel Page",
            description:
              "On your PC or phone browser go to my.roku.com and log into your Roku account. Click on Add Channel with a Code from the left side menu.",
          },
          {
            title: "STEP 3: Enter the Private Channel Code",
            description:
              "Type in the private channel access code we sent you, tick the terms agreement box and click Add Channel. Roku will confirm the channel has been added to your account.",
          },
          {
            title: "STEP 4: Update Channels on Your Roku Device",
            description:
              "On your Roku remote press Home, scroll to Settings, go to System and select System Update. Click Check Now to pull the newly added private channel onto your Roku device.",
          },
          {
            title: "STEP 5: Open the Channel and Enter Your Credentials",
            description:
              "Find the newly added channel on your Roku home screen, open it and enter your Trex IPTV login credentials when prompted to load your full channel library.",
          },
          {
            title: "STEP 6: Start Watching",
            description:
              "Your complete Trex IPTV channel list is now available directly on your Roku device.",
          },
        ],
      },
    ],
  },
];
