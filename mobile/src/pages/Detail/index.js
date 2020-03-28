import React from "react";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const message =
    'Olá ONG, estou entrando em contato porque gostaria de ajudar no "CASO" com o valor de R$ 120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: ",
      recipients: ["andre.c.zottis@gmail.com"],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${message}&text=${message}`);

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>
      <View style={styles.incident}>
        <Text style={(styles.incidentProperty, { marginTop: 0 })}>ONG:</Text>
        <Text style={styles.incidentValue}>Apad</Text>
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Descrição caso</Text>
        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$ 125,00</Text>
      </View>
      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
