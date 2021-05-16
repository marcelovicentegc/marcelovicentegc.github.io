import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Map, Popup } from "maplibre-gl"
import { graphql, useStaticQuery } from "gatsby"
import { Site } from "../components/Site"
import { PageHeader } from "../components/PageHeader"
import { Inner } from "../components/System"
import { Section } from "../components/Section"
import "maplibre-gl/dist/maplibre-gl.css"

interface SiteData {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
    }
  }
}

interface GeoFeature {
  type: "Feature"
  properties: {
    description: string
  }
  geometry: {
    type: "Point"
    coordinates: [number, number]
  }
}

const MapPage = () => {
  const data: SiteData = useStaticQuery(graphql`
    query MapPageSiteData {
      site {
        siteMetadata {
          defaultTitle
          defaultDescription
        }
      }
    }
  `)

  const handlePins = (
    map: Map,
    pin: string,
    source: string,
    features: GeoFeature[]
  ) => {
    map.loadImage(
      `/images/${pin}.png`,
      // Add an image to use as a custom marker
      function(
        error: Error,
        image:
          | HTMLImageElement
          | ArrayBufferView
          | {
              width: number
              height: number
              data: Uint8Array | Uint8ClampedArray
            }
          | ImageData
          | ImageBitmap
      ) {
        if (error) throw error

        map.addImage(pin, image)
        map.addSource(source, {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features,
          },
        })

        map.addLayer({
          id: source,
          type: "symbol",
          source: source,
          layout: {
            "icon-image": pin,
            "icon-allow-overlap": true,
          },
        })
      }
    )

    // Create a popup, but don't add it to the map yet.
    const popup = new Popup({
      closeButton: false,
      closeOnClick: false,
    })

    map.on("mouseenter", source, function(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer"

      // @ts-ignore
      const coordinates = e?.features?.[0].geometry?.coordinates?.slice()
      const description = e?.features?.[0]?.properties?.description

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map)
    })

    map.on("mouseleave", source, function() {
      map.getCanvas().style.cursor = ""
      popup.remove()
    })
  }

  useEffect(() => {
    const map = new Map({
      container: "map",
      style: `https://api.maptiler.com/maps/outdoor/style.json?key=${process.env.GATSBY_MAPTILER_API_KEY}`,
      center: [-15, 15],
      zoom: 1,
    })
    map.on("load", function() {
      handlePins(map, "pin_mountain", "mountains", [
        {
          type: "Feature",
          properties: {
            description:
              "<strong>Aconcagua</strong><a href='https://en.wikipedia.org/wiki/Aconcagua'>Aconcagua on Wikipedia</p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-70.0116, -32.65305],
          },
        },
      ])

      handlePins(map, "pin_visited", "visited", [
        {
          type: "Feature",
          properties: {
            description: "<strong>Paris</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [2.3488, 48.85341],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Milano</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [9.18854, 45.464664],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Roma</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [12.496366, 41.902782],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Vaticano</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [12.454628, 41.904755],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Firenze</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [11.24626, 43.77925],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Barcelona</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [2.1734, 41.3851],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Madrid</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-3.7038, 40.4168],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Toledo</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-4.0273, 39.8628],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>London</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [0.1278, 51.5074],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Minneapolis</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-93.265, 44.9778],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Duluth</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-92.100487, 46.786671],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>New York</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-74.006, 40.7128],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Miami</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.7617],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Orlando</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-81.3792, 28.5383],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>São Paulo</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-46.6333, -23.5505],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Rio de Janeiro</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-43.1729, -22.9068],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Salvador</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-38.5016, -12.9777],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Campos de Jordão</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-45.5964, -22.7429],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Fortaleza</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-38.527, -3.7327],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Fortaleza</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-38.527, -3.7327],
          },
        },
        {
          type: "Feature",
          properties: {
            description: "<strong>Recife</strong>",
          },
          geometry: {
            type: "Point",
            coordinates: [-34.883, -8.0577],
          },
        },
      ])
    })
  }, [])

  const meta = data.site.siteMetadata
  return (
    <Site>
      <main>
        <Helmet title={`${meta.defaultTitle}'s map`}>
          <meta name="twitter:title" content={`${meta.defaultTitle}'s map`} />
          <meta name="twitter:description" content={meta.defaultDescription} />
        </Helmet>
        <PageHeader title="Map" />
        <Inner>
          <Section>
            <div
              id="map"
              style={{
                minHeight: "26.75rem",
              }}
            />
          </Section>
        </Inner>
      </main>
    </Site>
  )
}

export default MapPage
