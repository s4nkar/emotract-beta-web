import ContactCard from "./ContactCard";

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

export default function ContactList() {
  return (
    <div className="text-black w-0 bg-[#e8eafd] dark:bg-[#09050b] dark:bg-dark md:min-w-[250px] md:w-[25%] justify-center overflow-y-scroll  scrollbar-thin scrollbar-thumb-[#e0e1ff] scrollbar-track-[#fff] dark:scrollbar-thumb-[#181c14] dark:scrollbar-track-[#000]" style={{ height: "calc(100vh - 5rem)" }}>
      {contactData.map((data)=>(
        <ContactCard key={data.id} {...data}/>
      ))}
      </div>
  );
}


