import ContactCard from "./ContactCard";

export default function ContactList() {
  return (
    <div className="text-black w-[25%] overflow-y-scroll" style={{ backgroundColor: "#E3E1F4", height: "calc(100vh - 5rem)" }}>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      <ContactCard/>
      </div>
  );
}


