import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPrototypeComponent } from './prototype/main-prototype/main-prototype.component';
import { BaseSingletonComponent } from './singleton/base-singleton/base-singleton.component';
import { TargetComponent } from './adapter/target/target.component';
import { BaseBridgeComponent } from './bridge/base-bridge/base-bridge.component';
import { BaseAbstactFactoryComponent } from './abstract-factory/base-abstact-factory/base-abstact-factory.component';
import { BaseBuilderComponent } from './builder/base-builder/base-builder.component';
import { BaseComponent } from './base/base.component';
import { BaseFactoryMethodComponent } from './factory-method/base-factory-method/base-factory-method.component';
import { BaseCompositeComponent } from './composite/base-composite/base-composite.component';
import { BaseDecoratorComponent } from './decorator/base-decorator/base-decorator.component';
import { BaseFacadeComponent } from './facade/base-facade/base-facade.component';
import { BaseFlyweightComponent } from './flyweigth/base-flyweight/base-flyweight.component';
import { BaseProxyComponent } from './proxy/base-proxy/base-proxy.component';
import {
   BaseChainOfResponsibilityComponent
} from './chain-of-responsibility/base-chain-of-responsibility/base-chain-of-responsibility.component';
import { BaseInterpreterComponent } from './interpreter/base-interpreter/base-interpreter.component';
import { BaseIteratorComponent } from './iterator/base-iterator/base-iterator.component';
import { BaseMediatorComponent } from './mediator/base-mediator/base-mediator.component';
import { BaseMementoComponent } from './memento/base-memento/base-memento.component';
import { BaseObserverComponent } from './observer/base-observer/base-observer.component';
import { BaseStateComponent } from './state/base-state/base-state.component';
import { BaseStrategyComponent } from './strategy/base-strategy/base-strategy.component';
import { BaseTemplateMethodComponent } from './template-method/base-template-method/base-template-method.component';
import { BaseVisitorComponent } from './visitor/base-visitor/base-visitor.component';
import { PrototypeComponent } from './prototype/prototype/prototype.component';
import { AdapteeComponent } from './adapter/adaptee/adaptee.component';
import { ConcreteImplementerAComponent } from './bridge/implementer/concrete-implementer-a/concrete-implementer-a.component';
import { ConcreteImplementerBComponent } from './bridge/implementer/concrete-implementer-b/concrete-implementer-b.component';
import { AdapterComponent } from './adapter/adapter/adapter.component';
import { RefinedAbstractionComponent } from './bridge/abstraction/refined-abstraction/refined-abstraction.component';
import { SingletonComponent } from './singleton/singleton/singleton.component';

@NgModule({
   declarations: [
      AppComponent,
      MainPrototypeComponent,
      PrototypeComponent,
      BaseSingletonComponent,
      TargetComponent,
      BaseBridgeComponent,
      BaseAbstactFactoryComponent,
      BaseBuilderComponent,
      BaseComponent,
      BaseFactoryMethodComponent,
      BaseCompositeComponent,
      BaseDecoratorComponent,
      BaseFacadeComponent,
      BaseFlyweightComponent,
      BaseProxyComponent,
      BaseChainOfResponsibilityComponent,
      BaseInterpreterComponent,
      BaseIteratorComponent,
      BaseMediatorComponent,
      BaseMementoComponent,
      BaseObserverComponent,
      BaseStateComponent,
      BaseStrategyComponent,
      BaseTemplateMethodComponent,
      BaseVisitorComponent,
      AdapteeComponent,
      ConcreteImplementerAComponent,
      ConcreteImplementerBComponent,
      AdapterComponent,
      RefinedAbstractionComponent,
      SingletonComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
