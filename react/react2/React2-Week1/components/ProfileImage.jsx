import Image from "next/image";
export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile Picture"
      width={200}
      height={150}
      className="profile-image"
    />
  );
}
