import ContactCard from "./ContactCard";

export default function ContactList() {
  return (
    <div className="text-black w-[25%] overflow-y-scroll custom-scroll" style={{ backgroundColor: "#E3E1F4", height: "calc(100vh - 5rem)" }}>
      <ContactCard  message_count={5}/>
      <ContactCard  message_count={15}/>
      <ContactCard  message_count={4}/>
      <ContactCard  message_count={1}/>
      <ContactCard  message_count={9}/>
      <ContactCard  message_count={2}/>
      </div>
  );
}


