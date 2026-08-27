import L from "leaflet";

import "leaflet/dist/leaflet.css";

const mapElement = document.querySelector("#branches-map");

if (mapElement) {
  const branches = [
    {
      name: "7-й микрорайон",
      address: "г. Бишкек, 7-й микрорайон, 15/4",
      coordinates: [42.827301, 74.620294],
      twogisUrl:
        "https://2gis.kg/bishkek/branches/70000001092772063/firm/70000001092772064/74.620294%2C42.827301",
    },
    {
      name: "Ибраимова",
      address: "г. Бишкек, ул. Ибраимова, 29",
      coordinates: [42.865744, 74.617286],
      twogisUrl:
        "https://2gis.kg/bishkek/branches/70000001092772063/firm/70000001104430579/74.617286%2C42.865744",
    },
    {
      name: "Узун-Булак",
      address: "г. Бишкек, ул. Узун-Булак, 65",
      coordinates: [42.828357, 74.570364],
      twogisUrl:
        "https://2gis.kg/bishkek/branches/70000001092772063/firm/70000001110578485/74.570364%2C42.828357",
    },
  ];

  const map = L.map(mapElement, {
    zoomControl: true,
    scrollWheelZoom: false,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const branchIcon = L.divIcon({
    className: "branch-map-marker",
    html: `
      <span class="branch-map-marker__dot"></span>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -14],
  });

  const markers = [];

  branches.forEach((branch) => {
    const marker = L.marker(branch.coordinates, {
      icon: branchIcon,
    }).addTo(map);

    marker.bindPopup(`
  <div class="branch-map-popup">
    <h3 class="branch-map-popup__title">
      ${branch.name}
    </h3>

    <p class="branch-map-popup__address">
      ${branch.address}
    </p>

    <a
      class="branch-map-popup__link"
      href="${branch.twogisUrl}"
      target="_blank"
      rel="noopener noreferrer"
    >
      Смотреть в 2GIS
    </a>
  </div>
`);

    markers.push(marker);
  });

  const group = L.featureGroup(markers);

  map.fitBounds(group.getBounds(), {
    padding: [40, 40],
  });

  markers[0].openPopup();
}
