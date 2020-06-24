import React from 'react';
import { UserInputModel } from '../models';
import Slider from '@material-ui/core/Slider';
import './userInput.scss';
import { LocationButton } from './locationButton';

/* TODO:
 * Should have:
 * - an address/zipcode field
 * - location button
 * - price slider (1-4)
 * - distance field - will work in miles
 * - ?distance slider (0-50 miles)?
 * - a submit button
 */

interface UserInputProps {
  onSubmit: (userInput: UserInputModel) => void;
}

interface UserInputState {
  deviceLocation: { lat: number; lon: number };
}

/** Used for the User Input for the application */
export class UserInput extends React.Component<UserInputProps, UserInputState> {
  constructor(props: UserInputProps) {
    super(props);
    this.state = { deviceLocation: { lat: 0, lon: 0 } };
  }

  /**
   * Checks whether a value is a zipcode.
   */
  isZipCode(value: string): boolean {
    const zipRegex = /^[0-9]{5}$/;
    return zipRegex.test(value);
  }

  findLocationfromDevice() {
    navigator.geolocation?.getCurrentPosition(
      this.findLocationfromDeviceSuccess.bind(this),
      this.findLocationfromDeviceError.bind(this)
    );
  }

  findLocationfromDeviceSuccess(position: Position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    this.setState({ deviceLocation: { lat, lon } });
    console.log(this.state.deviceLocation);
  }

  findLocationfromDeviceError(err: any) {
    console.log(err);
  }

  parseLocation() {}

  render() {
    return (
      <div>
        <h2>UserInput Component</h2>
        <Slider
          defaultValue={1}
          valueLabelDisplay='auto'
          step={1}
          marks
          min={1}
          max={4}
        />
        <LocationButton searchLocation={() => this.findLocationfromDevice()} />
      </div>
    );
  }
}
