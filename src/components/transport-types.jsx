import TransportType from "./transport-type"

export default function TransportTypes() {

  const transports = [
    { id: "airport", text: "Airport - Hotel Transfer", price: '68.50' },
    { id: "hotel", text: "Hotel - Airport Transfer", price: '68.50' },
    { id: "round", text: "Round Trip - Transfer", price: '137.00' },
  ]

  return (
    <section className="transport-types w-2/3 mx-auto max-w-sm flex flex-col items-center justify-center md:flex-row md:w-full md:max-w-none md:gap-20">

      {transports.map((transport) => (
        <TransportType
          key={transport.id}
          id={transport.id}
          text={transport.text}
          price={transport.price}
        />
      ))}

    </section>
  )
}