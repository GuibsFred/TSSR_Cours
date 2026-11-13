# Distribution Linux Operator pour v86, construite sur GitHub Actions (Linux 32 bits).
# Adaptation du Dockerfile Alpine fourni par copy/v86.
FROM i386/alpine:3.21.0
ENV KERNEL=virt
RUN apk add --no-cache openrc alpine-base agetty alpine-conf linux-virt linux-firmware-none bash coreutils findutils grep sed gawk vim nano less util-linux iproute2 iputils procps tar gzip
RUN sed -i 's/getty 38400 tty1/agetty --autologin root tty1 linux/' /etc/inittab \
 && printf '\nttyS0::respawn:/sbin/agetty --autologin root -s ttyS0 115200 vt100\n' >> /etc/inittab \
 && echo 'root:' | chpasswd \
 && sed -i '/^root:/s@/bin/ash$@/bin/bash@' /etc/passwd \
 && setup-hostname operator
RUN mkdir -p /home/tssr/sources /home/tssr/logs /home/tssr/resultats /home/tssr/backup \
 && printf 'Serveur-01 | 192.168.1.10\nServeur-02 | 192.168.1.20\nPC-01 | 192.168.1.100\n' >/home/tssr/sources/inventaire.txt \
 && printf '08:01 INFO démarrage\n08:02 ERROR apache arrêté\n08:03 INFO réseau disponible\n08:04 ERROR accès refusé\n08:05 INFO sauvegarde prête\n' >/home/tssr/logs/serveur.log \
 && printf 'cd /home/tssr\nexport PS1="root@operator:\\w# "\nprintf "\\nLINUX OPERATOR PRÊT - tape help, ls ou pwd\\n"\n' >/root/.bash_profile
RUN for i in devfs dmesg mdev hwdrivers; do rc-update add "$i" sysinit; done \
 && for i in hwclock modules sysctl hostname syslog bootmisc; do rc-update add "$i" boot; done \
 && rc-update add killprocs shutdown
# Noyau et initramfs avec 9p : le disque est hébergé dans les fichiers statiques du site.
RUN mkinitfs -F 'base virtio 9p' "$(cat /usr/share/kernel/$KERNEL/kernel.release)"
