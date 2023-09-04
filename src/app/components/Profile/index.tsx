import ProfilePhoto from "@/icons/ProfilePhoto";

export default function Profile() {
    return (
        <div className='flex gap-2 items-center justify-center'>
          <ProfilePhoto />
          <p className='text-white text-2xl'>Boa tarde, <br /> <strong>Biro</strong>👋 </p>
        </div>
    )
}