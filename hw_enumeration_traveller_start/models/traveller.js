const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() { 
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    minDistance = 0

    if (journey.distance >= 1000){
      return minDistance += journey.distance;
    };

  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((distanceTravelled, journey) => {
    return distanceTravelled += journey.distance;
  }, 0);
  // go through each journey object and retrieve total distance travelled.  counting each distance in tandem and returning final value
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransport = this.journeys.map(journey => journey.transport); 
  const uniqueTransport = [... new Set(allTransport)];

  return uniqueTransport;
};

module.exports = Traveller;
