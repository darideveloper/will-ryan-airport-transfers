export async function getTransports () {

  // Todo: get transports from API
  const transports = [
    { id: "Arriving", text: "Airport - Hotel Transfer", price: '68.50', initialActive: true},
    { id: "Departing", text: "Hotel - Airport Transfer", price: '68.50', initialActive: false },
    { id: "Arriving,Departing", text: "Round Trip - Transfer", price: '137.00', initialActive: false },
  ]

  return transports
}