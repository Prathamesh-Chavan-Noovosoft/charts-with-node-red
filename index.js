import { setupControlPlotLogic } from "./scripts/models/controlplot";
import { setupHistogramLogic } from "./scripts/models/histogram";

// Main Program
setupHistogramLogic();
setupControlPlotLogic();

// TODO:
// Histogram
// [ x ] - Abstract the random data generation variables so that can be accessed in the console
// [ x ] - Only create variables on button click
// [ x ] - Fix multipliers

// Control Plot
// [ x ] - Plot the Axis correctly
// [ ] -  Calculate Average of batches in sample data
// [ x ] - Plot Units on Y axis
// [ x ] - Plot Line of control & zones
// [ x ] - Plot circles
// [ x ] - Build logic for 1 - 7 Rules.
// [ ] - Write cleaner logic for rules.
// [ ] - Write comparators better.

// General
// [ ] - Improve implementations submitEvents & inputEvents to be more reuseable
// [ ] - Separate Axis drawing logic from Histogram class. reuse it for Drawing control plot
// [ ] - Separate repeatable logic.
// [ ] - Reusable functions should have good use cases
