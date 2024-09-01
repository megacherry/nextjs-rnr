/** @type {import('next').NextConfig} */
import { withExpo } from "@expo/next-adapter";

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@rn-primitives/checkbox",
    "@rn-primitives/dropdown-menu",
    "@rn-primitives/hooks",
    "@rn-primitives/label",
    "@rn-primitives/portal",
    "@rn-primitives/popover",
    "@rn-primitives/select",
    "@rn-primitives/separator",
    "@rn-primitives/slot",
    "@rn-primitives/switch",
    "expo-apple-authentication",
    "expo-av",
    "expo-constants",
    "expo-crypto",
    "expo-haptics",
    "expo-image-picker",
    "expo-linking",
    "expo-modules-core",
    "expo-navigation-bar",
    "expo-web-browser",
    "lucide-react-native",
    "nativewind",
    "react-native",
    "react-native-css-interop",
    "react-native-mmkv",
    "react-native-reanimated",
    "react-native-svg",
    "react-native-web",
    "solito",
  ],
  experimental: {
    forceSwcTransforms: true,
    scrollRestoration: true,
  },
};

export default withExpo(nextConfig);
