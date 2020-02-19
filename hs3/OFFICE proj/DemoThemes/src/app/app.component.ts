import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  themes = {
    'default-theme': defaultTheme,
    'theme-2-theme': theme2,
    'theme-3-theme': theme3,
    'theme-4-theme': theme4,
    'theme-5-theme': theme5,
    'theme-6-theme': theme6,
    'theme-7-theme': theme7,
    'theme-8-theme': theme8,
    'theme-9-theme': theme9
  };
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  color = 'accent';
  mode = 'indeterminate';
  value = 50;
  currentTheme = 'default-theme';

  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer: OverlayContainer) {

  }

  onSetTheme(theme) {
    this.currentTheme = theme;
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

}


var defaultTheme = `
$mat-grey-example: (
  50: #fafafa,   // Most far away
  100: #f5f5f5,  // Far far away
  200: #eeeeee,  // Far away
  300: #e0e0e0,  // Middle far
  400: #bdbdbd,  // Middle
  500: #9e9e9e,  // Middle close
  600: #757575,  // Close
  700: #616161,  // Very close
  800: #424242,  // Very very Close    1
  900: #212121,  // Closest
  // Accent Background (calling for user action, notice, feedback/response)
  // Texts, fields, cursors, selections, progress, buttons
  A100: #ffffff,  // Most far away
  A200: #eeeeee,  // Middle
  A400: #bdbdbd,  // Close
  A700: #616161,  // Closest
  contrast: (
    // Non-accent Texts - it's a contrast array opposite to the background for
    // text coloring.
    // General
    50: $dark-primary-text,   // Most far away
    100: $dark-primary-text,  // Far far away
    200: $dark-primary-text,  // Far away
    300: $dark-primary-text,  // Middle far
    400: $dark-primary-text,  // Middle
    500: $dark-primary-text,  // Middle close
    600: $light-primary-text, // Close
    700: $light-primary-text, // Very close
    800: $light-primary-text, // Very very Close    1
    900: $light-primary-text, // Closest
    // Accent Texts (calling for user action, notice, feedback/response)
    // Texts, fields, cursors, selections, progress, buttons
    A100: $dark-primary-text,   // Most far away
    A200: $dark-primary-text,   // Middle
    A400: $dark-primary-text,   // Close
    A700: $light-primary-text,  // Closest
  )
);
$mat-example: (
  // Backgrounds
  50: #aec4c7,
  100: #8bb7be,
  200: #57a2ae,
  300: #3e96a7,
  400: #1e8b9d,
  500: #0090a8,
  600: #007a8d,
  700: #006a7a,
  800: #00616d,
  900: #004f53,
  A100: #73d7d7,
  A200: #12b1b1,
  A400: #008b9a,
  A700: #00667a,
  contrast: (
    // Texts
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $light-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme2 = `
$mat-blue-grey: (
  50: #eceff1,
  100: #cfd8dc,
  200: #b0bec5,
  300: #90a4ae,
  400: #78909c,
  500: #607d8b,
  600: #546e7a,
  700: #455a64,
  800: #37474f,
  900: #263238,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
$mat-amber: (
  50: #fff8e1,
  100: #ffecb3,
  200: #ffe082,
  300: #ffd54f,
  400: #ffca28,
  500: #ffc107,
  600: #ffb300,
  700: #ffa000,
  800: #ff8f00,
  900: #ff6f00,
  A100: #ffe57f,
  A200: #ffd740,
  A400: #ffc400,
  A700: #ffab00,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $dark-primary-text,
    600: $dark-primary-text,
    700: $dark-primary-text,
    800: $dark-primary-text,
    900: $dark-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $dark-primary-text,
  )
);
`;



var theme3 = `
$mat-grey: (
  50: #fafafa,
  100: #f5f5f5,
  200: #eeeeee,
  300: #e0e0e0,
  400: #bdbdbd,
  500: #9e9e9e,
  600: #757575,
  700: #616161,
  800: #424242,
  900: #212121,
  A100: #ffffff,
  A200: #eeeeee,
  A400: #bdbdbd,
  A700: #616161,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $dark-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $light-primary-text,
  )
);
$mat-brown: (
  50: #efebe9,
  100: #d7ccc8,
  200: #bcaaa4,
  300: #a1887f,
  400: #8d6e63,
  500: #795548,
  600: #6d4c41,
  700: #5d4037,
  800: #4e342e,
  900: #3e2723,
  A100: #d7ccc8,
  A200: #bcaaa4,
  A400: #8d6e63,
  A700: #5d4037,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $light-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme4 = `
$mat-blue: (
  50: #e3f2fd,
  100: #bbdefb,
  200: #90caf9,
  300: #64b5f6,
  400: #42a5f5,
  500: #2196f3,
  600: #1e88e5,
  700: #1976d2,
  800: #1565c0,
  900: #0d47a1,
  A100: #82b1ff,
  A200: #448aff,
  A400: #2979ff,
  A700: #2962ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
$mat-light-blue: (
  50: #e1f5fe,
  100: #b3e5fc,
  200: #81d4fa,
  300: #4fc3f7,
  400: #29b6f6,
  500: #03a9f4,
  600: #039be5,
  700: #0288d1,
  800: #0277bd,
  900: #01579b,
  A100: #80d8ff,
  A200: #40c4ff,
  A400: #00b0ff,
  A700: #0091ea,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme5 = `
$mat-blue-grey: (
  50: #eceff1,
  100: #cfd8dc,
  200: #b0bec5,
  300: #90a4ae,
  400: #78909c,
  500: #607d8b,
  600: #546e7a,
  700: #455a64,
  800: #37474f,
  900: #263238,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
$mat-blue: (
  50: #e3f2fd,
  100: #bbdefb,
  200: #90caf9,
  300: #64b5f6,
  400: #42a5f5,
  500: #2196f3,
  600: #1e88e5,
  700: #1976d2,
  800: #1565c0,
  900: #0d47a1,
  A100: #82b1ff,
  A200: #448aff,
  A400: #2979ff,
  A700: #2962ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme6 = `
$mat-light-blue: (
  50: #e1f5fe,
  100: #b3e5fc,
  200: #81d4fa,
  300: #4fc3f7,
  400: #29b6f6,
  500: #03a9f4,
  600: #039be5,
  700: #0288d1,
  800: #0277bd,
  900: #01579b,
  A100: #80d8ff,
  A200: #40c4ff,
  A400: #00b0ff,
  A700: #0091ea,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $light-primary-text,
  )
);
$mat-blue: (
  50: #e3f2fd,
  100: #bbdefb,
  200: #90caf9,
  300: #64b5f6,
  400: #42a5f5,
  500: #2196f3,
  600: #1e88e5,
  700: #1976d2,
  800: #1565c0,
  900: #0d47a1,
  A100: #82b1ff,
  A200: #448aff,
  A400: #2979ff,
  A700: #2962ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme7 = `
$mat-blue-grey: (
  50: #eceff1,
  100: #cfd8dc,
  200: #b0bec5,
  300: #90a4ae,
  400: #78909c,
  500: #607d8b,
  600: #546e7a,
  700: #455a64,
  800: #37474f,
  900: #263238,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);

$mat-blue: (
  50: #e3f2fd,
  100: #bbdefb,
  200: #90caf9,
  300: #64b5f6,
  400: #42a5f5,
  500: #2196f3,
  600: #1e88e5,
  700: #1976d2,
  800: #1565c0,
  900: #0d47a1,
  A100: #82b1ff,
  A200: #448aff,
  A400: #2979ff,
  A700: #2962ff,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $light-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;



var theme8 = `
$mat-grey: (
  50: #fafafa,
  100: #f5f5f5,
  200: #eeeeee,
  300: #e0e0e0,
  400: #bdbdbd,
  500: #9e9e9e,
  600: #757575,
  700: #616161,
  800: #424242,
  900: #212121,
  A100: #ffffff,
  A200: #eeeeee,
  A400: #bdbdbd,
  A700: #616161,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $dark-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: $light-primary-text,
  )
);
$mat-blue-grey: (
  50: #eceff1,
  100: #cfd8dc,
  200: #b0bec5,
  300: #90a4ae,
  400: #78909c,
  500: #607d8b,
  600: #546e7a,
  700: #455a64,
  800: #37474f,
  900: #263238,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);
`;


var theme9 = `
$mat-orange: (
  50: #fff3e0,
  100: #ffe0b2,
  200: #ffcc80,
  300: #ffb74d,
  400: #ffa726,
  500: #ff9800,
  600: #fb8c00,
  700: #f57c00,
  800: #ef6c00,
  900: #e65100,
  A100: #ffd180,
  A200: #ffab40,
  A400: #ff9100,
  A700: #ff6d00,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $dark-primary-text,
    500: $dark-primary-text,
    600: $dark-primary-text,
    700: $dark-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $dark-primary-text,
    A700: black,
  )
);
$mat-blue-grey: (
  50: #eceff1,
  100: #cfd8dc,
  200: #b0bec5,
  300: #90a4ae,
  400: #78909c,
  500: #607d8b,
  600: #546e7a,
  700: #455a64,
  800: #37474f,
  900: #263238,
  A100: #cfd8dc,
  A200: #b0bec5,
  A400: #78909c,
  A700: #455a64,
  contrast: (
    50: $dark-primary-text,
    100: $dark-primary-text,
    200: $dark-primary-text,
    300: $dark-primary-text,
    400: $light-primary-text,
    500: $light-primary-text,
    600: $light-primary-text,
    700: $light-primary-text,
    800: $light-primary-text,
    900: $light-primary-text,
    A100: $dark-primary-text,
    A200: $dark-primary-text,
    A400: $light-primary-text,
    A700: $light-primary-text,
  )
);

`;
