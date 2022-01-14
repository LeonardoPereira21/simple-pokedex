export const DETAILS = {
  data: {
    abilities: [
      {
        ability: {
          name: "overgrow",
          url: "https://pokeapi.co/api/v2/ability/65/",
        },
        is_hidden: false,
        slot: 1,
      },
      {
        ability: {
          name: "chlorophyll",
          url: "https://pokeapi.co/api/v2/ability/34/",
        },
        is_hidden: true,
        slot: 3,
      },
    ],
    name: "bulbasaur",
    order: 1,
    species: {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon-species/1/",
    },
    sprites: {
      other: {
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
      },
    },
    types: [
      {
        slot: 1,
        type: {
          name: "grass",
          url: "https://pokeapi.co/api/v2/type/12/",
        },
      },
      {
        slot: 2,
        type: {
          name: "poison",
          url: "https://pokeapi.co/api/v2/type/4/",
        },
      },
    ],
    egg_groups: [
      {
        name: "monster",
        url: "https://pokeapi.co/api/v2/egg-group/1/",
      },
      {
        name: "plant",
        url: "https://pokeapi.co/api/v2/egg-group/7/",
      },
    ],
  },
};

export const INITIAL_STATE = {
  captured: {
    list: [],
  },
};

export const CAPTURED_STATE = {
  captured: {
    list: [
      {
        order: 1,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1",
      },
    ],
  },
};
