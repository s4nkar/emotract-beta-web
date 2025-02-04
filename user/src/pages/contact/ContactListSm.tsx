import Header from "@/components/header/Header";
import ContactCard from "@/components/contact/ContactCard";
import Aside from "@/components/aside/Aside";

const contactData = [
  {
    id: '1',
    name: 'Amal',
    last_message: 'See you soon!',
    message_count: 10,
    time: '18:03',
  },
  {
    id: '2',
    name: 'Sankar',
    last_message: 'wsp',
    message_count: 2,
    time: '18:03',
  },
  {
    id: '3',
    name: 'Ansari',
    last_message: 'erachi veno',
    message_count: 0,
    time: '18:03',
  },
  {
    id: '4',
    name: 'Lison',
    last_message: 'test message',
    message_count: 7,
    time: '18:03',
  },
]

export default function ContactListSm() {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className="text-black w-full bg-[#fff] dark:bg-[#09050b] dark:bg-dark justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-[#e0e1ff] scrollbar-track-[#fff] dark:scrollbar-thumb-[#181c14] dark:scrollbar-track-[#000]" style={{ height: "calc(100vh - 5rem)" }}>
      {contactData.map((data)=>(
        <ContactCard key={data.id} {...data} size="sm"/>
      ))}
      </div>
      </div>
    </div>
  );
}


