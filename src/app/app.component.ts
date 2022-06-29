import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Customer-management-System';
}

//Definitions
////ngsw-config.json configuration file specifies which files and data URLs the Angular service worker should cache and how it should update the cached files and data. 
////Here is Routing defines back-end routing rules and authorization behavior for both static content and APIs1. The rules are defined as an array of rules in the routes.json file.
////BrowserAnimationsModulelink: Exports BrowserModule with additional dependency-injection providers for use with animations
////What is a service worker in Angular? Adding a service worker to an Angular application is one of the steps for turning an application into a Progressive Web App (also known as a PWA).
//// ngsw. json file? This is the runtime configuration file, that the Angular Service worker will use.
////Angular router's navigation guards allow to grant or remove access to certain parts of the navigation. Another route guard, the CanDeactivate guard, even allows you to prevent a user from accidentally leaving a component with unsaved changes.
//What are Route Guards? Angular's route guards are interfaces which can tell the router whether or not it should allow navigation to a requested route. 
///CanActivatelink Interface that a class can implement to be a guard deciding if a route can be activated. If all guards return true , navigation continues. If any guard returns false , navigation is cancelled.
///CanDeactivate is a TypeScript interface that needs to be implemented by a component to create a route guard. This guard will be used by the router to decide if the route can be deactivated. It can be implemented in any Angular component using the canDeactivate method of the interface.
///CanLoadlink Interface that a class can implement to be a guard deciding if children can be loaded. If all guards return true , navigation continues. If any guard returns false , navigation is cancelled.
///The then() method takes two callback functions as parameters and is invoked when a promise is either resolved or rejected. The catch() method takes one callback function and is invoked when an error occurs.
///What is shared in Angular? Image result for WHAT IS SHARED ANGULAR MATERIAL IN ANGULAR A shared module in Angular is a module where we put directives, pipes, and components and then import just that module wherever we need it in other parts of our app.
///What does export do in angular? An export what you put is the exports property of the @NgModule decorator. It enables an Angular module to expose some of its components/directives/pipes to the other modules in the applications. 
///Promises in Angular provide an easy way to execute asynchronous functions that use callbacks, while emitting and completing (resolving or rejecting) one value at a time.
// <!--Angular's async pipe is a tool to resolve the value of a subscribable in the template. A subscribable can be an Observable , an EventEmitter , or a Promise. The pipe listens for promises to resolve and observables and event emitters to emit values.J-->
//What is spinner in angular? Image result for what is mat-spinner in angular Ngx spinner is a library for loading spinner for Angular, which is meant to inform the user that data loading is in progress. Basically Loader is used to show the loading state of data in application. Prerequisites.
///pathMatch is a property which informs a router how to match and map a URL to the path of an actual route.
///forRoot creates a module that contains all the directives, the given routes, and the router service itself. forChild creates a module that contains all the directives and the given routes, but does not include the router service.
//MatDialog creates modal dialogs that implements the ARIA role="dialog" pattern by default.
//Constructor in Angular is put into use to inject dependencies into the component class. It creates a new instance of the class when the compiler calls 'new MyClass ()'.
//What is async in Angular? The async pipe subscribes to an Observable or Promise and returns the latest value it has emitted. When a new value is emitted, the async pipe marks the component to be checked for changes. When the component gets destroyed, the async pipe unsubscribes automatically to avoid potential memory leaks.
//What is a event in Angular? In an event binding, Angular configures an event handler for the target event. You can use event binding with your own custom events.
//What is await and Promise? Inside an async function you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
//What is emit Angular? EventEmitter is an angular2 abstraction and its only purpose is to emit events in components. Quoting a comment from Rob Wormald. [...] EventEmitter is really an Angular abstraction, and should be used pretty much only for emitting custom Events in components. 
//What does input do in Angular? Use the @Input() decorator in a child component or directive to let Angular know that a property in that component can receive its value from its parent component. It helps to remember that the data flow is from the perspective of the child component.
//What is output in Angular? Image result for output angular ? @Output decorator binds a property of a component, to send data from one component to the calling component. @Output binds a property of the type of angular EventEmitter class. To transfer the data from child to parent component, we use @Output decorator.
//What is @inject used for?
//Image result for WHAT IS @INJECT IN ANGULAR Injections, also known as shots, deliver liquid medications, fluids, or nutrients directly into a person's body. A healthcare professional can use injections to administer vaccines and other types of medications into a person's vein, muscle, skin, or bone.
//What is readonly attribute? The readonly attribute is a boolean attribute. When present, it specifies that an input field or textarea is read-only. A read-only field cannot be modified (however, a user can tab to it, highlight it, and copy the text from it).
//We can store all of our main application data in Observables – specifically in BehaviorSubjects that are converted to Observables Using the asObservable method that we learned in the last section
//And also using the async pipe wherever we can This way, whenever there is an update to any of our data, all of our components that are subscribed can be notified
//ngClass is a directive in Angular that adds and removes CSS classes on an HTML element.
