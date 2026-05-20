import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

function PrivacyTr() {
  return (
    <>
      <h1 className="feedo-legal-doc-title">Feedo — Gizlilik Politikası</h1>

      <p>
        <strong>Son Güncelleme:</strong> 21 Mayıs 2026
      </p>

      <h2>1. Giriş</h2>
      <p>
        Bu Gizlilik Politikası (“Politika”), Feedo mobil uygulaması, web sitesi ve
        ilişkili hizmetler (“Hizmetler”) kapsamında kişisel verilerin nasıl toplandığını,
        kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
      </p>
      <p>
        Feedo&apos;yu kullanarak bu politikada belirtilen uygulamaları okuduğunuzu ve
        kabul ettiğinizi beyan etmiş olursunuz.
      </p>

      <h2>2. Toplanan Bilgiler</h2>
      <p>Feedo aşağıdaki bilgi türlerini toplayabilir:</p>

      <h3>Hesap ve Profil Bilgileri</h3>
      <ul>
        <li>Ad ve soyad</li>
        <li>E-posta adresi</li>
        <li>Profil bilgileri</li>
        <li>Hesap kimlik doğrulama bilgileri</li>
      </ul>

      <h3>Operasyonel Veriler</h3>
      <ul>
        <li>Çiftlik yönetim kayıtları</li>
        <li>Görev ve üretim bilgileri</li>
        <li>Kullanıcı tarafından oluşturulan içerikler</li>
        <li>Takvim ve operasyon kayıtları</li>
      </ul>

      <h3>Medya ve İçerikler</h3>
      <ul>
        <li>Yüklenen görseller</li>
        <li>Fotoğraflar</li>
        <li>Dosyalar</li>
      </ul>

      <h3>Teknik Veriler</h3>
      <ul>
        <li>IP adresi</li>
        <li>Cihaz modeli</li>
        <li>İşletim sistemi</li>
        <li>Uygulama sürümü</li>
        <li>Çökme kayıtları</li>
        <li>Hata logları</li>
        <li>Güvenlik logları</li>
        <li>Oturum bilgileri</li>
      </ul>

      <h3>Ödeme Bilgileri</h3>
      <p>
        Ödeme işlemleri Apple App Store, Google Play veya üçüncü taraf ödeme
        sağlayıcıları tarafından yürütülebilir. Feedo ödeme kartı bilgilerini doğrudan
        saklamaz.
      </p>

      <h2>3. Bilgilerin Kullanım Amaçları</h2>
      <p>Toplanan bilgiler aşağıdaki amaçlarla kullanılabilir:</p>
      <ul>
        <li>Hizmetlerin sağlanması</li>
        <li>Kullanıcı hesap yönetimi</li>
        <li>Kimlik doğrulama işlemleri</li>
        <li>Teknik destek sağlanması</li>
        <li>Güvenlik süreçlerinin yürütülmesi</li>
        <li>Hata tespiti ve performans iyileştirme</li>
        <li>Ürün geliştirme</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Kötüye kullanımın önlenmesi</li>
      </ul>

      <h2>4. Üçüncü Taraf Hizmetler</h2>
      <p>Feedo aşağıdaki gibi üçüncü taraf hizmet sağlayıcılardan yararlanabilir:</p>
      <ul>
        <li>Apple</li>
        <li>Google</li>
        <li>Firebase</li>
        <li>Supabase</li>
        <li>RevenueCat</li>
        <li>Vercel</li>
      </ul>
      <p>Bu sağlayıcılar kendi gizlilik politikaları kapsamında veri işleyebilir.</p>

      <h2>5. Verilerin Paylaşılması</h2>
      <p>Kişisel veriler aşağıdaki durumlarda paylaşılabilir:</p>
      <ul>
        <li>Hizmet sağlayıcılarla teknik operasyon amacıyla,</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi amacıyla,</li>
        <li>Yetkili kamu kurumlarının talepleri doğrultusunda,</li>
        <li>Şirket birleşmesi, yatırım veya devralma süreçlerinde,</li>
        <li>Güvenlik ve dolandırıcılık önleme süreçlerinde.</li>
      </ul>

      <h2>6. Uluslararası Veri Aktarımı</h2>
      <p>Bazı hizmet sağlayıcılarının sunucuları Türkiye dışında bulunabilir.</p>
      <p>
        Bu nedenle kişisel veriler farklı ülkelerde işlenebilir veya saklanabilir. Feedo
        veri aktarım süreçlerinde uygulanabilir veri koruma mevzuatına uygun tedbirler
        almaya çalışır.
      </p>

      <h2>7. Veri Saklama Süreleri</h2>
      <p>Kişisel veriler yalnızca gerekli olduğu süre boyunca saklanır.</p>
      <p>Örnek olarak:</p>
      <ul>
        <li>Hesap bilgileri: hesap aktif olduğu sürece</li>
        <li>Teknik log kayıtları: güvenlik ve sistem ihtiyaçları doğrultusunda sınırlı süre</li>
        <li>Destek talepleri: yasal veya operasyonel gereklilik süresince</li>
      </ul>
      <p>
        Yasal yükümlülükler veya hukuki uyuşmazlıklar nedeniyle bazı veriler daha uzun
        süre saklanabilir.
      </p>
      <p>Süre sonunda veriler:</p>
      <ul>
        <li>silinir,</li>
        <li>anonim hale getirilir,</li>
        <li>veya güvenli şekilde imha edilir.</li>
      </ul>

      <h2>8. Güvenlik</h2>
      <p>
        Feedo kişisel verileri korumak amacıyla makul teknik ve idari tedbirler uygulamayı
        hedefler.
      </p>
      <p>Bunlar arasında:</p>
      <ul>
        <li>erişim kontrolü,</li>
        <li>oturum yönetimi,</li>
        <li>şifreleme yöntemleri,</li>
        <li>güvenlik logları,</li>
        <li>sistem izleme süreçleri</li>
      </ul>
      <p>yer alabilir.</p>
      <p>Ancak internet tabanlı sistemlerde mutlak güvenlik garanti edilemez.</p>

      <h2>9. Hesap Silme</h2>
      <p>
        Kullanıcılar hesaplarını uygulama içerisinden veya iletişim adresi üzerinden talep
        oluşturarak silebilir.
      </p>
      <p>Bazı veriler:</p>
      <ul>
        <li>yasal yükümlülükler,</li>
        <li>güvenlik kayıtları,</li>
        <li>uyuşmazlık süreçleri</li>
      </ul>
      <p>nedeniyle belirli süre saklanabilir.</p>

      <h2>10. Çocukların Gizliliği</h2>
      <p>Feedo 13 yaş altındaki bireylere yönelik değildir.</p>
      <p>Bilerek çocuklardan kişisel veri toplanmaz.</p>

      <h2>11. Politika Değişiklikleri</h2>
      <p>Bu politika zaman zaman güncellenebilir.</p>
      <p>Önemli değişiklikler:</p>
      <ul>
        <li>uygulama içi bildirim,</li>
        <li>e-posta,</li>
        <li>veya web sitesi üzerinden</li>
      </ul>
      <p>duyurulabilir.</p>

      <h2>12. İletişim</h2>
      <p>
        E-posta:{" "}
        <a href="mailto:davutbciftci@gmail.com">davutbciftci@gmail.com</a>
        <br />
        Web sitesi:{" "}
        <a href="https://davutbciftci.com" target="_blank" rel="noopener noreferrer">
          https://davutbciftci.com
        </a>
      </p>
    </>
  )
}

function PrivacyEn() {
  return (
    <>
      <h1 className="feedo-legal-doc-title">Feedo — Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong> 21 May 2026
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy (“Policy”) explains how personal data are collected, used,
        stored, and protected in connection with the Feedo mobile application, website,
        and related services (“Services”).
      </p>
      <p>
        By using Feedo, you represent that you have read and accept the practices
        described in this Policy.
      </p>

      <h2>2. Information we may collect</h2>
      <p>Feedo may collect the following types of information:</p>

      <h3>Account and profile information</h3>
      <ul>
        <li>First and last name</li>
        <li>Email address</li>
        <li>Profile information</li>
        <li>Account authentication data</li>
      </ul>

      <h3>Operational data</h3>
      <ul>
        <li>Farm management records</li>
        <li>Task and production information</li>
        <li>User-generated content</li>
        <li>Calendar and operational records</li>
      </ul>

      <h3>Media and content</h3>
      <ul>
        <li>Uploaded images</li>
        <li>Photos</li>
        <li>Files</li>
      </ul>

      <h3>Technical data</h3>
      <ul>
        <li>IP address</li>
        <li>Device model</li>
        <li>Operating system</li>
        <li>App version</li>
        <li>Crash reports</li>
        <li>Error logs</li>
        <li>Security logs</li>
        <li>Session information</li>
      </ul>

      <h3>Payment information</h3>
      <p>
        Payments may be processed by the Apple App Store, Google Play, or third-party
        payment providers. Feedo does not directly store payment card details.
      </p>

      <h2>3. How we use information</h2>
      <p>Collected information may be used for the following purposes:</p>
      <ul>
        <li>Providing the Services</li>
        <li>Managing user accounts</li>
        <li>Authentication</li>
        <li>Providing technical support</li>
        <li>Operating security processes</li>
        <li>Error detection and performance improvement</li>
        <li>Product development</li>
        <li>Complying with legal obligations</li>
        <li>Preventing misuse</li>
      </ul>

      <h2>4. Third-party services</h2>
      <p>Feedo may rely on third-party service providers such as:</p>
      <ul>
        <li>Apple</li>
        <li>Google</li>
        <li>Firebase</li>
        <li>Supabase</li>
        <li>RevenueCat</li>
        <li>Vercel</li>
      </ul>
      <p>These providers may process data under their own privacy policies.</p>

      <h2>5. Sharing of data</h2>
      <p>Personal data may be shared in the following situations:</p>
      <ul>
        <li>With service providers for technical operations,</li>
        <li>To comply with legal obligations,</li>
        <li>In response to requests from competent public authorities,</li>
        <li>In connection with mergers, investments, or acquisitions,</li>
        <li>For security and fraud prevention.</li>
      </ul>

      <h2>6. International transfers</h2>
      <p>Some service providers may host servers outside Turkey.</p>
      <p>
        Therefore, personal data may be processed or stored in different countries. Feedo
        seeks to take measures consistent with applicable data protection law in
        connection with transfers.
      </p>

      <h2>7. Retention periods</h2>
      <p>Personal data are kept only for as long as necessary.</p>
      <p>For example:</p>
      <ul>
        <li>Account information: for as long as the account is active</li>
        <li>Technical logs: for a limited period according to security and system needs</li>
        <li>Support requests: for the period required by law or operations</li>
      </ul>
      <p>
        Some data may be retained longer due to legal obligations or legal disputes.
      </p>
      <p>After the retention period, data may be:</p>
      <ul>
        <li>deleted,</li>
        <li>anonymized, or</li>
        <li>securely destroyed.</li>
      </ul>

      <h2>8. Security</h2>
      <p>
        Feedo aims to apply reasonable technical and administrative measures to protect
        personal data.
      </p>
      <p>These may include:</p>
      <ul>
        <li>access control,</li>
        <li>session management,</li>
        <li>encryption,</li>
        <li>security logs,</li>
        <li>system monitoring</li>
      </ul>
      <p>However, no internet-based system can guarantee absolute security.</p>

      <h2>9. Account deletion</h2>
      <p>
        Users may delete their accounts from within the app or by submitting a request
        via the contact address.
      </p>
      <p>Some data may be retained for a certain period due to:</p>
      <ul>
        <li>legal obligations,</li>
        <li>security records, or</li>
        <li>dispute processes.</li>
      </ul>

      <h2>10. Children&apos;s privacy</h2>
      <p>Feedo is not directed at individuals under 13.</p>
      <p>Personal data are not knowingly collected from children.</p>

      <h2>11. Changes to this Policy</h2>
      <p>This Policy may be updated from time to time.</p>
      <p>Material changes may be announced through:</p>
      <ul>
        <li>in-app notice,</li>
        <li>email, or</li>
        <li>the website.</li>
      </ul>

      <h2>12. Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:davutbciftci@gmail.com">davutbciftci@gmail.com</a>
        <br />
        Website:{" "}
        <a href="https://davutbciftci.com" target="_blank" rel="noopener noreferrer">
          https://davutbciftci.com
        </a>
      </p>
    </>
  )
}

export function FeedoPrivacyLegalContent() {
  const { i18n, t } = useTranslation()
  const isTr = i18n.language.startsWith("tr")

  return (
    <>
      {isTr ? <PrivacyTr /> : <PrivacyEn />}
      <nav className="feedo-legal-crosslinks" aria-label={t("feedo.legal.relatedLabel")}>
        <Link to="/projects/feedo/kvk-disclosure">{t("feedo.legal.seeKvk")}</Link>
      </nav>
    </>
  )
}
