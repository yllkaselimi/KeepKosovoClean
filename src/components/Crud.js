import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';

const Crud = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [mapCoords, setMapCoords] = useState({ lat:  42.645312, lng: 21.1733611 });

  useEffect(() => {
    // Load data from local storage on component mount
    const savedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
    setItems(savedItems);
  }, []);

  const handleSave = () => {
    // Create a new item object
    console.log(imageFile)
    const newItem = {
      title,
      description,
      image: (imageFile !== '' && imageFile !== null) ? URL.createObjectURL(imageFile) : '', // Create a URL for the uploaded image
      mapCoords: { ...mapCoords },
    };

    // Update the state with the new item
    setItems([...items, newItem]);

    // Save the updated data to local storage
    localStorage.setItem('crudItems', JSON.stringify([...items, newItem]));

    // Clear the input fields
    setTitle('');
    setDescription('');
    setImageFile(null);
    setMapCoords({ lat: 0, lng: 0 });
  };

  const handleDelete = (index) => {
    // Create a copy of the items array and remove the item at the specified index
    const updatedItems = [...items];
    updatedItems.splice(index, 1);

    // Update the state and local storage with the updated items
    setItems(updatedItems);
    localStorage.setItem('crudItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">CRUD Page</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600">Title</label>
        <input
          type="text"
          id="title"
          className="w-full border rounded-md p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-600">Description</label>
        <textarea
          id="description"
          className="w-full border rounded-md p-2"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-600">Image Upload</label>
        <input
          type="file"
          id="image"
          className="w-full border rounded-md p-2"
          accept="image/*" // Allow only image files to be uploaded
          onChange={(e) => setImageFile(e.target.files[0])} // Store the selected file
        />
      </div>
      <div className="mb-4 overflow-hidden" style={{ width: '300px', height: '300px' }}>
        <label htmlFor="map" className="block text-gray-600">Map Coordinates</label>
        <MapContainer
          center={[mapCoords.lat, mapCoords.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          id="map"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[mapCoords.lat, mapCoords.lng]}
            draggable={true}
            eventHandlers={{
              dragend: (e) => {
                setMapCoords(e.target.getLatLng());
              },
            }}
          >
            <Popup>Your Location</Popup>
          </Marker>
          <UseMapEventsComponent setMapCoords={setMapCoords} />
        </MapContainer>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
        onClick={handleSave}
      >
        Save
      </button>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="border rounded-md p-4 mb-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <img src={item.image} alt={item.title} className="mt-2 w-32 h-32 object-cover" />
              <p className="mt-2">Latitude: {item.mapCoords.lat}</p>
              <p>Longitude: {item.mapCoords.lng}</p>
              <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full mt-2"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const UseMapEventsComponent = ({ setMapCoords }) => {
    // Use useMapEvents here to capture map events
    const map = useMapEvents({
      click: (e) => {
        setMapCoords(e.latlng);
      },
    });
  
    return null;
  };

export default Crud;
