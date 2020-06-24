import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

interface LocationButtonProps {
  searchLocation: () => void;
}

interface LocationButtonState {
  enabled: boolean;
}

export class LocationButton extends React.Component<
  LocationButtonProps,
  LocationButtonState
> {
  constructor(props: LocationButtonProps) {
    super(props);

    this.state = { enabled: false };
  }

  componentDidMount() {
    this.checkIfLocationIsAvailable();
  }

  checkIfLocationIsAvailable(): void {
    if ('geolocation' in navigator) {
      this.setState({ enabled: true });
    }
  }
  render() {
    return (
      <IconButton onClick={this.props.searchLocation}>
        <LocationSearchingIcon style={{ color: 'white' }} />
      </IconButton>
    );
  }
}
