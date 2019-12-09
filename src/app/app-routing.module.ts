import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseSingletonComponent } from './singleton/base-singleton/base-singleton.component';
import { MainPrototypeComponent } from './prototype/main-prototype/main-prototype.component';
import { BaseBuilderComponent } from './builder/base-builder/base-builder.component';
import { BaseBridgeComponent } from './bridge/base-bridge/base-bridge.component';
import { TargetComponent } from './adapter/target/target.component';
import { BaseAbstactFactoryComponent } from './abstract-factory/base-abstact-factory/base-abstact-factory.component';
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
import { BaseCommandComponent } from './command/base-command/base-command.component';


const routes: Routes = [
    { path: '', component: BaseComponent },
    { path: 'abstract-factory', component: BaseAbstactFactoryComponent },
    { path: 'adapter', component: TargetComponent },
    { path: 'bridge', component: BaseBridgeComponent },
    { path: 'builder', component: BaseBuilderComponent },
    { path: 'prototype', component: MainPrototypeComponent },
    { path: 'singleton', component: BaseSingletonComponent },
    { path: 'factory-method', component: BaseFactoryMethodComponent },
    { path: 'composite', component: BaseCompositeComponent },
    { path: 'decorator', component: BaseDecoratorComponent },
    { path: 'facade', component: BaseFacadeComponent },
    { path: 'flyweight', component: BaseFlyweightComponent },
    { path: 'proxy', component: BaseProxyComponent },
    { path: 'chain-of-responsibility', component: BaseChainOfResponsibilityComponent },
    { path: 'interpreter', component: BaseInterpreterComponent },
    { path: 'iterator', component: BaseIteratorComponent },
    { path: 'mediator', component: BaseMediatorComponent },
    { path: 'memento', component: BaseMementoComponent },
    { path: 'observer', component: BaseObserverComponent },
    { path: 'state', component: BaseStateComponent },
    { path: 'strategy', component: BaseStrategyComponent },
    { path: 'template-method', component: BaseTemplateMethodComponent },
    { path: 'visitor', component: BaseVisitorComponent },
    { path: 'command', component: BaseCommandComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
