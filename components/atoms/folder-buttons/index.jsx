import Image from "next/image";

export default function FolderButton({ iconSrc, folderName }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={iconSrc} width={50} height={50} alt="folder_button_icons" />
      <span className="text-white">{folderName}</span>
    </div>
  );
}
