import styles from "./content.module.scss";
import Image from 'next/image'

export const Content = () => {
    return (
        <div className={styles.contentDiv}>
            <h2>What is Encrypt Password website?</h2>
            <p>
                The Encrypt website is a website to make a strong password for
                use in other places.
            </p>
            <p>
                Using the SHA-512 to encrypt the password, and its very easy to
                use and save. the information not save nowhere.
            </p>
            <p>
                To use is simples, is only input the password, and click in the
                button to encrypt. The content doesn’t seem why not save the
                other form. Click in the other button com copy the password and
                paste where you want.
            </p>
            <h2>Using SHA-512</h2>
            <p>
                The SHA-512 is a hashing algorithm used in many this, to
                preference in internet security, digital certificates and even
                blockchains hashing. The base for this algorithm is a SHA-215
                but is more secure for use in your passwords
            </p>
            <p>
                SHA-512 it’s part of group of hashing algorithms called SHA-2,
                using for bitcoin and blockchain hashing
            </p>
            <h2>Hashing Algorithm</h2>
            <p>SHA-512 work in few stages</p>

            <p>
                SHA-512 can’t actually hash a message input of any size, i.e. it
                has an input size limit. This limit is imposed by its very
                structure as you may see further on. The entire formatted
                message has basically three parts: the original message, padding
                bits, size of original message. And this should all have a
                combined size of a whole multiple of 1024 bits. This is because
                the formatted message will be processed as blocks of 1024 bits
                each, so each bock should have 1024 bits to work with.
            </p>
            <p>
                Need some padding bits, the input message for a simple 0 a
                leading 1. The algorithm to be functional need a paddings. The
                total is a 128bits, and the message size is a multiple 1024bits
            </p>
            <p>
                Since the size of the original message needs to be represented
                in 128 bits and the largest number that can be represented using
                128 bits is (2¹²⁸-1), the message size can be at most (2¹²⁸-1)
                bits; and also taking into consideration the necessary single
                padding bit, the maximum size for the original message would
                then be (2¹²⁸-2). Even though this limit exists, it doesn’t
                actually cause a problem since the actual limit is so high
                (2¹²⁸-2 = 340,282,366,920,938,463,463,374,607,431,768,211,454
                bits).
            </p>
            <img src="https://en.bitcoinwiki.org/upload/en/images/c/c6/SHA-512.jpg" alt="image" />
            <a href="https://en.bitcoinwiki.org/upload/en/images/c/c6/SHA-512.jpg">https://en.bitcoinwiki.org/upload/en/images/c/c6/SHA-512.jpg</a>
        </div>
    );
};
