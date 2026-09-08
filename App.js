import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function App() {
  // State untuk setiap input
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [sisiA, setSisiA] = useState('');
  const [sisiB, setSisiB] = useState('');
  const [sisiC, setSisiC] = useState('');

  // Arrow function: Hitung luas segitiga
  const hitungLuas = (a, t) => 0.5 * a * t;

  // Arrow function: Hitung keliling segitiga
  const hitungKeliling = (a, b, c) => a + b + c;

  // Arrow function: Hitung jenis segitiga berdasarkan sisi
  const jenisSegitiga = (a, b, c) => {
    if (a === b && b === c) return 'Sama Sisi';
    if (a === b || b === c || a === c) return 'Sama Kaki';
    return 'Sembarang';
  };

  // Konversi input ke angka (0 jika kosong)
  const a = parseFloat(alas) || 0;
  const t = parseFloat(tinggi) || 0;
  const sA = parseFloat(sisiA) || 0;
  const sB = parseFloat(sisiB) || 0;
  const sC = parseFloat(sisiC) || 0;

  // Hitung otomatis setiap kali state berubah
  const luas = hitungLuas(a, t);
  const keliling = hitungKeliling(sA, sB, sC);
  const jenis = (sA > 0 && sB > 0 && sC > 0) ? jenisSegitiga(sA, sB, sC) : '-';

  // Cek apakah input luas sudah terisi
  const luasReady = a > 0 && t > 0;
  const kelilingReady = sA > 0 && sB > 0 && sC > 0;

  // Template literal untuk hasil output
  const hasilLuas = luasReady
    ? `½ × ${a} × ${t} = ${luas}`
    : 'Masukkan alas dan tinggi';

  const hasilKeliling = kelilingReady
    ? `${sA} + ${sB} + ${sC} = ${keliling}`
    : 'Masukkan ketiga sisi';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <StatusBar style="light" />

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>🔺 Program Segitiga</Text>
            <Text style={styles.headerSubtitle}>React Native — Template Literal</Text>
          </View>

          {/* Card: Input Luas */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📐 Input Luas Segitiga</Text>
            <View style={styles.divider} />

            <Text style={styles.label}>Alas (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan alas..."
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={alas}
              onChangeText={setAlas}
            />

            <Text style={styles.label}>Tinggi (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan tinggi..."
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={tinggi}
              onChangeText={setTinggi}
            />

            {/* Hasil Luas */}
            <View style={[styles.resultBox, luasReady && styles.resultBoxActive]}>
              <Text style={styles.resultLabel}>Luas Segitiga</Text>
              <Text style={[styles.resultValue, !luasReady && styles.resultPlaceholder]}>
                {`${hasilLuas}`}
              </Text>
              {luasReady && (
                <Text style={styles.resultFinal}>{luas} cm²</Text>
              )}
            </View>
          </View>

          {/* Card: Input Keliling */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>📏 Input Keliling Segitiga</Text>
            <View style={styles.divider} />

            <Text style={styles.label}>Sisi A (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan sisi A..."
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={sisiA}
              onChangeText={setSisiA}
            />

            <Text style={styles.label}>Sisi B (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan sisi B..."
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={sisiB}
              onChangeText={setSisiB}
            />

            <Text style={styles.label}>Sisi C (cm)</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan sisi C..."
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={sisiC}
              onChangeText={setSisiC}
            />

            {/* Hasil Keliling & Jenis */}
            <View style={[styles.resultBox, kelilingReady && styles.resultBoxActive]}>
              <Text style={styles.resultLabel}>Keliling Segitiga</Text>
              <Text style={[styles.resultValue, !kelilingReady && styles.resultPlaceholder]}>
                {`${hasilKeliling}`}
              </Text>
              {kelilingReady && (
                <Text style={styles.resultFinal}>{keliling} cm</Text>
              )}
            </View>

            <View style={[styles.resultBox, kelilingReady && styles.resultBoxGreen]}>
              <Text style={styles.resultLabel}>Jenis Segitiga</Text>
              <Text style={[styles.resultValue, !kelilingReady && styles.resultPlaceholder]}>
                {`Jenis: ${jenis}`}
              </Text>
            </View>
          </View>

          <Text style={styles.footer}>Pemrograman Mobile 1 — IF-2-KM</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#f8fafc',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 6,
    fontStyle: 'italic',
  },
  card: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#f1f5f9',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginBottom: 14,
  },
  label: {
    fontSize: 13,
    color: '#94a3b8',
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#f1f5f9',
    fontSize: 15,
    marginBottom: 14,
  },
  resultBox: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    padding: 14,
    marginTop: 4,
    marginBottom: 10,
  },
  resultBoxActive: {
    borderColor: '#1d4ed8',
    backgroundColor: '#1e3a8a22',
  },
  resultBoxGreen: {
    borderColor: '#16a34a',
    backgroundColor: '#14532d22',
  },
  resultLabel: {
    fontSize: 11,
    color: '#64748b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 14,
    color: '#7dd3fc',
    fontFamily: 'monospace',
  },
  resultPlaceholder: {
    color: '#475569',
    fontStyle: 'italic',
  },
  resultFinal: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginTop: 6,
  },
  footer: {
    marginTop: 8,
    fontSize: 12,
    color: '#475569',
    textAlign: 'center',
  },
});
