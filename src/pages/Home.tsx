import {
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';
import { book, addCircle, grid } from 'ionicons/icons';
import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="topo">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
            <IonTitle>Meu Estoque</IonTitle>
            <img slot="end" src="/assets/diamante.svg" alt=""/>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/anel-de-diamante.svg" alt=""/>
          <IonCardHeader class="ion-text-center">
            <IonCardSubtitle>Meu Estoque</IonCardSubtitle>
            <IonCardTitle>S. Almeida Joias</IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonList lines="none">
            <IonListHeader class="listaTitulo">
              <IonLabel class="lblListaTitulo">Acesso Rápido</IonLabel>
            </IonListHeader>
            <IonItem routerLink="home/produtos" routerDirection="none">
              <IonIcon slot="start" color="medium" icon={book} />
              <IonLabel>Buscar joias</IonLabel>
            </IonItem>
            <IonItem routerLink="home/cadastrar" routerDirection="none">
              <IonIcon slot="start" color="medium" icon={addCircle} />
              <IonLabel>Cadastrar Joia</IonLabel>
            </IonItem>
            <IonItem routerLink="home/agenda" routerDirection="none">
              <IonIcon slot="start" color="medium" icon={grid} />
              <IonLabel>Agenda</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
        
        <IonCard>
          <IonList lines="none">
              <IonListHeader class="listaTitulo">
                <IonLabel class="lblListaTitulo">Informações</IonLabel>
              </IonListHeader>
              <IonItem>
                <IonIcon slot="start" color="medium" icon={book} />
                <IonLabel>Item...</IonLabel>
              </IonItem>
              <IonItem>
                <IonIcon slot="start" color="medium" icon={book} />
                <IonLabel>Item...</IonLabel>
              </IonItem>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
