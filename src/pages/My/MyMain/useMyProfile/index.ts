import React, { useEffect, useState } from 'react';
import getMyProfile from '../../../../apis/my';
import useAuthStore from '../../../../store/useAuthStore';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';

interface MyProfileType {
  nickName: string;
  univ: string;
  major: string;
  profileImage: string;
  upload: null | number;
  sell: null | number;
  follower: null | number;
}

export default function useMyProfile() {
  const [myProfile, setMyProfile] = useState<MyProfileType>({
    nickName: '',
    univ: '',
    major: '',
    profileImage: '',
    upload: null,
    sell: null,
    follower: null,
  });
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const refreshPayload = useRefreshPayload();

  useEffect(() => {
    const asyncEffect = async () => {
      const updatedProfile = await getMyProfile(accessToken, refreshPayload);
      setMyProfile(updatedProfile);
    };

    asyncEffect();
  }, []);
  const { nickName, univ, major, profileImage, upload, sell, follower } =
    myProfile;
  return {
    nickName,
    univ,
    major,
    profileImage,
    upload,
    sell,
    follower,
  };
}
