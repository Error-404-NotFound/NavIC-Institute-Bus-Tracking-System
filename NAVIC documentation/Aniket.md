
# Vehicle Tracking using NavIC System

Here, in this project, we will be using the NavIC System to implement bus tracking system for our institute.


## Introduction:

To meet the positioning, navigation and timing requirements of the nation, ISRO has established a regional navigation satellite system called Navigation with Indian Constellation (NavIC). NavIC was erstwhile known as Indian Regional Navigation Satellite System (IRNSS). NavIC's Standard Positioning Service (SPS) will be available to civilians, but the system also has a level of Restrictive Service (RS) that is encrypted and far more accurate (in the range of 1 to 5 meters) and is designed for use by military forces and in defence applications. It supports the users with more accurate data in Indian regions since it provides information to the users for over 1500 km around India.

NavIC is designed with a constellation of 7 satellites and a network of ground stations operating 24 x 7. Three satellites of the constellation are placed in geostationary orbit, at 32.5°E, 83°E and 129.5°E respectively, and four satellites are placed in inclined geosynchronous orbit with equatorial crossing of 55°E and 111.75°E respectively, with inclination of 29° (two satellites in each plane). The ground network consists of control centre, precise timing facility, range and integrity monitoring stations, two-way ranging stations, etc.

The NavIC navigation system consists of a constellation of 7 satellites (1A, 1B, 1C, 1D, 1E, 1F, and 1G), 4 of which are continually in geosynchronous orbit and 3 of which are continuously in geostationary orbit (sec) sending navigation signals with a coded ephemeris and periodical data. There will be a total of 8 satellites where the last one remains inactive. One of the main reasons behind using IRNSS, it provides us with better accurate data compared to GPS. Its Accuracy rate is around 5 – 10 meters more compared to GPS. GPS has been the go-to module to be used for tracking vehicles and it has its advantages like Low Operational costs, Minimizing fuel costs, Increased efficiency, etc.

##	Basic Methodology:

- The attached image shows the basic working model for the tracking of vehicle using the NavIC System.

![Basic Methodology](https://github.com/Error-404-NotFound/NavIC-Institute-Bus-Tracking-System/blob/main/NAVIC%20documentation/Assets/working.jpg?raw=true)

##	Software and Hardware Integration:

- Software Integration

![Software Integration](https://github.com/Error-404-NotFound/NavIC-Institute-Bus-Tracking-System/blob/main/NAVIC%20documentation/Assets/workflow.jpg?raw=true)

- Hardware and Software Integration

![Hardware ](https://github.com/Error-404-NotFound/NavIC-Institute-Bus-Tracking-System/blob/main/NAVIC%20documentation/Assets/hardware_software_connection.jpg?raw=true)

- The data transfer between the hardware and software and explain how everything flows in the project and it also explains the dataflow from hardware to software.

## Applications and Usage of NavIC System:

1. **_Navigation and Positioning:_**
  - **Automotive Navigation:** NavIC provides accurate position information, which is crucial for navigation systems in vehicles.
  - **Maritime Navigation:** Ships and boats can use NavIC for precise navigation in coastal and open waters.
  - **Aviation:** Aircraft can utilize NavIC for navigation and landing procedures.
  - **Personal Navigation Devices:** NavIC can be integrated into personal navigation devices, providing users with accurate location information for activities such as hiking, trekking, and outdoor adventures.
  - **Emergency Services:** NavIC can be used by emergency services, such as ambulances and fire departments, to quickly and accurately navigate to incident locations. This aids in reducing response times during critical situations.
  - **Asset Tracking:** Businesses can use NavIC to track the location of valuable assets, equipment, and inventory in real-time. This is especially important in industries like construction, where tracking equipment is crucial for project management.
  Thus, NavIC enables real-time tracking of vehicles, which is beneficial for logistics companies, transportation services, and fleet management. It helps optimize routes, monitor vehicle speed, and enhance overall operational efficiency.

2. **_Military Applications:_**
  NavIC has military applications, including enhancing the accuracy of missile systems, battlefield navigation, and troop movement tracking.

3. **_Weather Forecasting:_**
  The precise timing and positioning information provided by NavIC can contribute to improved weather forecasting models.

4. **_Wildlife Monitoring:_**
  Researchers and conservationists can use NavIC to track the movement of wildlife. This is particularly valuable for studying animal behavior, migration patterns, and ensuring the safety of endangered species.

5. **_Mining and Construction:_**
  NavIC aids in the precise tracking of mining and construction equipment. This improves project management, enhances safety, and ensures that heavy machinery is used efficiently.

6. **_Time Synchronization:_**
  NavIC provides accurate timing information, which is essential for various applications that require precise time synchronization, such as financial transactions and communication networks.

And Many More...

## Implementation:

**Note:** Install the `ephem` library using the pip command. Before you install `ephem` and its dependencies, make sure that your `pip` is up to date.

```bash
pip install ephem
```
- The `ephem` library is a Python library used for performing high-precision astronomy computations. It provides a way to calculate the positions of celestial objects such as planets, stars, and satellites at a specific time and location on Earth. The library is particularly useful for applications that involve positional astronomy and satellite tracking.

- **Usage:** `ephem` is typically used to calculate the positions of celestial bodies based on their Two-Line Element (TLE) data.

- **Two-Line Element (TLE) Data:** TLE data is a specific format used to describe the orbital elements of Earth-orbiting objects, including satellites. This data is necessary for tracking the position of satellites.

**Note:** Keep in mind that TLE data can become outdated, so it's crucial to use the latest TLE data for accurate satellite tracking.

A basic Python code snippet to demonstrate the computation of position of NavIC satellite at a given observer's location.

```python
#AI Generated Python Snippet

import ephem

def get_navic_position():
    # Create a NavIC satellite object
    navic = ephem.readtle("IRNSS", "1 41783U 16013A   21140.52614157  .00000029  00000+0  11641-4 0  9995",
                          "2 41783  29.0401  77.9833 0014787 156.1576  11.8474  1.00220457  5004")

    # Set the observer's location (for example, New Delhi)
    observer = ephem.Observer()
    observer.lat = '28.6139'
    observer.lon = '77.2090'
    observer.elev = 220  # Elevation in meters (height above sea level)

    # Compute the satellite position
    navic.compute(observer)

    # Print the satellite's azimuth and elevation
    print(f"Satellite Azimuth: {navic.az*180/ephem.pi} degrees")
    print(f"Satellite Elevation: {navic.alt*180/ephem.pi} degrees")

if __name__ == "__main__":
    get_navic_position()

```

NavIC (Navigation with Indian Constellation) is the Indian Regional Navigation Satellite System (IRNSS), which is designed to provide accurate position information to users in India and the surrounding region.

A python scripit that combines the NavIC Satellite Data with the hardware sensors involves many steps. The following snippet of code demonstrates the integration of NavIC Satellite Data and a Temperature sensor(to find the Temperature of a given location)

```python
#AI Generated Python Snippet

import ephem
import time

class GPSSensor:
    def get_location(self):
        # Simulated GPS data (replace with actual GPS sensor implementation)
        return 28.6139, 77.2090  # Delhi, India

def get_navic_position(latitude, longitude):
    # Step 4: Initialize NavIC satellite object
    navic = ephem.readtle("IRNSS", "1 41783U 16013A   21140.52614157  .00000029  00000+0  11641-4 0  9995",
                          "2 41783  29.0401  77.9833 0014787 156.1576  11.8474  1.00220457  5004")

    # Step 5: Set observer's location using GPS data
    observer = ephem.Observer()
    observer.lat, observer.lon = str(latitude), str(longitude)

    # Step 6: Compute satellite position
    navic.compute(observer)

    # Step 7: Output satellite azimuth and elevation
    print(f"Satellite Azimuth: {navic.az*180/ephem.pi} degrees")
    print(f"Satellite Elevation: {navic.alt*180/ephem.pi} degrees")

def read_sensor_data():
    # Simulated temperature sensor data (replace with actual sensor implementation)
    return 25.5  # Degrees Celsius

# Step 1: Start
if __name__ == "__main__":
    # Step 2: Initialize GPS sensor
    gps_sensor = GPSSensor()

    while True:
        # Step 3: Input location data from GPS sensor
        current_latitude, current_longitude = gps_sensor.get_location()

        # Call the function to demonstrate NavIC usage
        get_navic_position(current_latitude, current_longitude)

        # Step 8: Read data from hardware sensor (e.g., temperature sensor)
        sensor_data = read_sensor_data()

        # Step 9: Output sensor data
        print(f"Temperature: {sensor_data} °C")

        # Step 10: End
        time.sleep(5)  # Pause for 5 seconds before the next iteration

```
## Conclusion:

The Navigation with Indian Constellation, abbreviated as NavIC, is vitally important for India’s strategic autonomy and accurate navigation across the subcontinent. NavIC is now a global reality, indicating India’s power in the field of space technology thus elevating India’s position as a player in the international space community.

## Reference

 - [ISRO NavIC Satellite Navigation Service](https://www.isro.gov.in/SatelliteNavigationServices.html)


