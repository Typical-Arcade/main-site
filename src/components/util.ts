export const mobile = {
  is: (): boolean => /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
  android: (): boolean => /android/i.test(navigator.userAgent.toLowerCase()),
  ios: (): boolean => /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase()),
};

export const installModalSeenSessionStorage = {
  set: (value: 'yes' | 'no'): void => {
    sessionStorage.setItem('installModalSeen', value);
  },
  get: (): 'yes' | 'no' | null => sessionStorage.getItem('installModalSeen') as 'yes' | 'no' | null,
};