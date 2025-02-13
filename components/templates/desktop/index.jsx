import FolderButton from "@/components/atoms/folder-buttons";

export default function Desktop() {
  return (
    <div className="flex flex-col items-end p-4">
      <FolderButton iconSrc="/icons/desktop-icon.png" folderName="Desktop" />
    </div>
  );
}
