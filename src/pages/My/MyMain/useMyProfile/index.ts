import React, { useEffect, useState } from 'react';
import getMyProfile from '../../../../apis/my';
import useAuthStore from '../../../../store/authStore';

interface MyProfileType {
  nickName: string;
  univName: string;
  major: string;
  image_url: string;
  upload: null | number;
  sell: null | number;
  follower: null | number;
}

export default function useMyProfile() {
  const [myProfile, setMyProfile] = useState<MyProfileType>({
    nickName: '',
    univName: '',
    major: '',
    image_url: '',
    upload: null,
    sell: null,
    follower: null,
  });
  const accessToken = useAuthStore((state) => state.accessToken)!;

  useEffect(() => {
    const asyncEffect = async () => {
      const updatedProfile = await getMyProfile(accessToken);
      setMyProfile(updatedProfile);
    };

    asyncEffect();
  }, []);
  const { nickName, univName, major, image_url, upload, sell, follower } =
    myProfile;
  return { nickName, univName, major, image_url, upload, sell, follower };
}
