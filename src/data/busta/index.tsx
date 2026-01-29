export const salientFeatures = [
  {
    title: 'Multi-Currency pockets',
    description:
      'BUSta houses a pocket on the front with separate compartments for different denominations to reduce turn out time for each transaction.',
  },
  {
    title: '5 Buttons for printing tickets on the strap',
    description:
      'As shown in the figure, BUSta requires only 5 buttons to print tickets; other solutions require a numerical keypad with over 20 buttons.',
  },
  {
    title: 'Printing facility in the bag',
    description:
      'BUSta gives easier access to printed tickets by placing it at the end of the bag, where printed tickets can be easily accessed with different currencies.',
  },
  {
    title: 'Efficient Ticket Design',
    description:
      'A new ticket design not only saves paper but also removes clutter by removing unnecessary information.',
  },
  {
    title: 'GPS based location auto-update',
    description:
      'BUSta auto-updates location through GPS and automatically uses current location to print the ticket for the required destination, and hence calculates fare too.',
  },
];

export const designProcess = [
  {
    title: 'Pockets and Bag Design',
    description:
      'We visited different bag markets and shops like Decathlon to get inspiration for pocket design. Our first design had limited money capacity and was prone to money theft; all of which were fixed in the final iteration.',
    imgSrc: 'bag_design',
    imgAlt: 'bag design',
    columnLayout: '1fr 2fr',
    reverse: true,
  },
  {
    title: 'Strap Position',
    description:
      'Our first prototype was a little loose from the side so we tried attaching straps at different positions and tested with bus conductors. The bus conductors finalised on the 3rd position as it was the most comfortable and kept the bag completely horizontal.',
    imgSrc: 'strap_position',
    imgAlt: 'strap position',
    columnLayout: '2fr 1fr',
    reverse: false,
  },
  {
    title: 'Buttons',
    description:
      'Bus conductors found our initial 2 cms buttons slightly small and often got confused between them. We fixed this by increasing button diameter to 2.5 cms and reinventing the button design.',
    imgSrc: 'buttons',
    imgAlt: 'buttons',
    columnLayout: '1fr 2fr',
    reverse: true,
  },
];

export const technology = [
  {
    title: 'Circuit',
    description:
      'The circuit running through the strap consists of 2 wires - one for power and other for buttons. The circuit remains completely hidden inside the strap.',
    imgSrc: 'circuit',
    imgAlt: 'circuit',
  },
  {
    title: 'Arduino, Smartphone and Powerbank',
    description:
      'The arduino placed inside the bag is powered by a powerbank. All the connections through the buttons happen via the arduino. A bluetooth module allows the smartphone to interact with it.',
    imgSrc: 'arduino',
    imgAlt: 'arduino',
  },
  {
    title: 'Printer',
    description:
      'The side of this bag houses a small thermal printer for printing tickets. The android phone will also be attached to a powerbank to ensure an extended battery.',
    imgSrc: 'printer',
    imgAlt: 'printer',
  },
];
