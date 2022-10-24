import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'icl-test',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GoogleAuth: {
      androidClientId: process.env.ANDKEY,
      iosClientId: process.env.IOSKEY,
      scopes: ['profile', 'email'],
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
