# 📦 Image Reveal Spinner

A lightweight Angular-based image reveal spinner that works as a **Web Component** and supports Angular.
<!-- , React, Vue, and plain HTML. -->

---

## ✨ Features

- Smooth image reveal animation  
- Configurable progress animation  
- Lightweight and optimized  
- Works with Angular Standalone Components  
<!-- - Framework-agnostic (Web Component support)   -->

---

## 📥 Installation

```bash
npm install @nawazaideveloperr/image-reveal-spinner
```

---

## 🚀 Usage

### Angular 16+ (Standalone Component)

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageReveal } from '@nawazaideveloperr/image-reveal-spinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AppImageReveal],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
```

---

### Template Usage

```html
<app-image-reveal
  [imageUrl]="'https://picsum.photos/800/400'"
  [fillColor]="'#898989'"
  [startValue]="0"
  [endValue]="100"
  [duration]="3000"
  [showProgress]="true"
  [progressSize]="'13px'"
  [progressColor]="'#ffffff'">
</app-image-reveal>
```


---

## 🚀 Best Practice (Staggered Animation in Angular)

To create a better visual experience, you can assign **random durations** to each image.  
This prevents all images from revealing at the same time and creates a natural staggered effect.

---

### Component Logic

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  imageArry = [
    { imageUrl: 'https://picsum.photos/400/200?1', duration: 0 },
    { imageUrl: 'https://picsum.photos/400/200?2', duration: 0 },
    { imageUrl: 'https://picsum.photos/400/200?3', duration: 0 },
  ];

  ngOnInit(): void {
    for (let i in this.imageArry) {
      this.imageArry[i].duration = this.getRandomNumber();
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
  }
}
```

---

### Template

```html
<ng-container *ngFor="let item of imageArry">
  <app-image-reveal 
    [imageUrl]="item.imageUrl" 
    [duration]="item.duration">
  </app-image-reveal>
</ng-container>
```

---

### 💡 Why this works better

- Each image gets a **different duration (3s–5s)**
- Prevents all animations from running simultaneously  
- Creates a **natural staggered reveal effect**
- Improves UI/UX significantly  

---

## ⚙️ Inputs

| Input | Type | Default | Description |
|------|------|--------|------------|
| `imageUrl` | string | '' | Image URL to reveal |
| `fillColor` | string | '#898989' | Background color |
| `startValue` | number | 0 | Starting progress value |
| `endValue` | number | 100 | Ending progress value |
| `duration` | number | 3000 | Animation duration (ms) |
| `showProgress` | boolean | true | Show/hide progress indicator |
| `progressSize` | string | '13px' | Progress text size |
| `progressColor` | string | '#fff' | Progress text color |

---

## 🎨 Example

```html
<app-image-reveal
  [imageUrl]="'https://picsum.photos/800/400'"
  [duration]="2000"
  [showProgress]="true">
</app-image-reveal>
```

---

## 📄 License

MIT License

---

## 🙌 Author

Nawaz Aideveloper  